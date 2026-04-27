# Devopstrio Azure OpenAI Secure Reference
# Core AI Platform Infrastructure (Terraform)
# Target: Microsoft Azure (Zero-Trust/Network Isolated)

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. AI Resource Group (Platform Hub)
resource "azurerm_resource_group" "ai_platform" {
  name     = "rg-aoai-secure-prd-uks-01"
  location = "uksouth"
  tags = {
    Platform = "Secure-AI"
    Unit     = "Platform-Security"
  }
}

# 2. Azure OpenAI Service (Network Isolated)
resource "azurerm_cognitive_account" "openai" {
  name                = "oai-secure-ref-prd-01"
  location            = azurerm_resource_group.ai_platform.location
  resource_group_name = azurerm_resource_group.ai_platform.name
  kind                = "OpenAI"
  sku_name            = "S0"
  
  public_network_access_enabled = false # Zero-Trust Isolation

  custom_subdomain_name = "cto-openai-secure-prd"
}

# 3. Model Deployments
resource "azurerm_cognitive_deployment" "gpt4o" {
  name                 = "gpt-4o"
  cognitive_account_id = azurerm_cognitive_account.openai.id
  model {
    format  = "OpenAI"
    name    = "gpt-4o"
    version = "2024-05-13"
  }
  sku {
    name     = "Standard"
    capacity = 10
  }
}

# 4. Azure AI Search (Vector Database for RAG)
resource "azurerm_search_service" "ai_search" {
  name                = "ais-secure-ref-prd-01"
  resource_group_name = azurerm_resource_group.ai_platform.name
  location            = azurerm_resource_group.ai_platform.location
  sku                 = "standard2"
  replica_count       = 1
  partition_count     = 1
  
  public_network_access_enabled = false
}

# 5. Private Endpoint for OpenAI
resource "azurerm_private_endpoint" "oai_pe" {
  name                = "pe-oai-secure-prd-01"
  location            = azurerm_resource_group.ai_platform.location
  resource_group_name = azurerm_resource_group.ai_platform.name
  subnet_id           = "/subscriptions/your-sub/resourceGroups/rg-net/providers/Microsoft.Network/virtualNetworks/vnet-hub/subnets/sn-pe"

  private_service_connection {
    name                           = "psc-oai"
    private_connection_resource_id = azurerm_cognitive_account.openai.id
    is_manual_connection           = false
    subresource_names              = ["account"]
  }
}

# 6. PostgreSQL Meta Database (AI Operations)
resource "azurerm_postgresql_flexible_server" "ai_ops_db" {
  name                   = "psql-aoai-ops-prd"
  resource_group_name    = azurerm_resource_group.ai_platform.name
  location               = azurerm_resource_group.ai_platform.location
  version                = "13"
  administrator_login    = "ai_admin"
  administrator_password = "secure-password-from-kv"
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2s_v3"
}

# 7. Key Vault for AI Keys & Customer Managed Keys (CMK)
resource "azurerm_key_vault" "ai_kv" {
  name                = "kv-aoai-secure-prd-01"
  location            = azurerm_resource_group.ai_platform.location
  resource_group_name = azurerm_resource_group.ai_platform.name
  tenant_id           = "your-tenant-id"
  sku_name            = "standard"
}

# Outputs
output "openai_endpoint" {
  value = azurerm_cognitive_account.openai.endpoint
}

output "ai_search_endpoint" {
  value = azurerm_search_service.ai_search.name
}
