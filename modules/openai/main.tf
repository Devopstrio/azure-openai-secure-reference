resource "azurerm_cognitive_account" "openai" {
  name                = var.openai_account_name
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = "OpenAI"
  sku_name            = "S0"

  public_network_access_enabled = false # CRITICAL for Security
  
  custom_subdomain_name = var.custom_subdomain
}

resource "azurerm_cognitive_deployment" "gpt4" {
  name                 = "gpt-4"
  cognitive_account_id = azurerm_cognitive_account.openai.id
  model {
    format  = "OpenAI"
    name    = "gpt-4"
    version = "0613"
  }
  scale {
    type = "Standard"
  }
}

# Private Endpoint for Secure Access
resource "azurerm_private_endpoint" "openai_endpoint" {
  name                = "pe-${azurerm_cognitive_account.openai.name}"
  location            = var.location
  resource_group_name = var.resource_group_name
  subnet_id           = var.subnet_id

  private_service_connection {
    name                           = "psc-openai"
    private_connection_resource_id = azurerm_cognitive_account.openai.id
    subresource_names              = ["account"]
    is_manual_connection           = false
  }
}
