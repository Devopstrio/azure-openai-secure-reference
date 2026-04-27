-- Devopstrio Azure OpenAI Secure Reference
-- Core AI Platform Orchestration & RAG Metadata Database Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_tenant_id VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'AI-Developer', -- AI-Admin, AI-Developer, Auditor
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Model & Blueprint Catalog
CREATE TABLE IF NOT EXISTS blueprints (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Chat, RAG, Agent, Training
    architecture_config JSONB,
    status VARCHAR(50) DEFAULT 'Draft',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ai_models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL, -- gpt-4o, gpt-35-turbo
    version VARCHAR(50),
    capability VARCHAR(100), -- Reasoning, Embedding, Multimedia
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. PromptOps & Execution
CREATE TABLE IF NOT EXISTS prompt_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    blueprint_id UUID REFERENCES blueprints(id),
    name VARCHAR(255) NOT NULL,
    system_prompt TEXT NOT NULL,
    version INT DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS execution_runs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    blueprint_id UUID REFERENCES blueprints(id),
    model_id UUID REFERENCES ai_models(id),
    prompt_used TEXT,
    response_text TEXT,
    tokens_prompt INT DEFAULT 0,
    tokens_completion INT DEFAULT 0,
    cost_usd FLOAT DEFAULT 0.0,
    duration_ms INT,
    status VARCHAR(50) DEFAULT 'Success',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. RAG & Knowledge Base
CREATE TABLE IF NOT EXISTS knowledge_indexes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    azure_search_index VARCHAR(255) UNIQUE NOT NULL,
    document_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS knowledge_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    index_id UUID REFERENCES knowledge_indexes(id) ON DELETE CASCADE,
    source_url TEXT,
    title VARCHAR(512),
    added_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Cost & FinOps
CREATE TABLE IF NOT EXISTS ai_cost_ledger (
    id BIGSERIAL PRIMARY KEY,
    tenant_id UUID REFERENCES tenants(id),
    service_type VARCHAR(100), -- OpenAI, AI-Search, AppService
    amount FLOAT NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    usage_date DATE NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Audit & Governance
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    payload JSONB,
    resource_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Strategic AI Platform Indexes
CREATE INDEX idx_blueprint_tenant ON blueprints(tenant_id);
CREATE INDEX idx_run_user ON execution_runs(user_id);
CREATE INDEX idx_run_blueprint ON execution_runs(blueprint_id);
CREATE INDEX idx_doc_index ON knowledge_documents(index_id);
CREATE INDEX idx_cost_tenant ON ai_cost_ledger(tenant_id);
CREATE INDEX idx_cost_date ON ai_cost_ledger(usage_date);
CREATE INDEX idx_audit_time ON audit_logs(created_at);
