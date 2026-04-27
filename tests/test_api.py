import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio Azure OpenAI Secure Reference
# Integration Tests for GenAI Orchestration & Responsible AI Guardrails

client = TestClient(app)

def test_health_check_operational():
    """Verify that the AI gateway is healthy and OpenAI is reachable."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["azure_openai_reachable"] is True

def test_model_catalog_retrieval():
    """Ensure the platform can list multi-region OpenAI models."""
    response = client.get("/models")
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert "gpt-4o" in [m["id"] for m in response.json()]

def test_rag_query_execution():
    """Verify that a semantic RAG query can be correctly triggered and return citations."""
    payload = {
        "collection_id": "hr-policies",
        "query": "What is the policy for remote work?",
        "top_k": 3
    }
    response = client.post("/rag/query", json=payload)
    assert response.status_code == 200
    assert "response" in response.json()
    assert len(response.json()["citations"]) > 0

def test_blueprint_deploy_initiation():
    """Verify that an AI reference architecture deployment can be correctly triggered."""
    payload = {
        "name": "project-insight-rag",
        "category": "RAG",
        "model": "gpt-4o",
        "region": "uksouth"
    }
    response = client.post("/blueprints/deploy", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()

def test_governance_posture_metrics():
    """Ensure the platform reports responsible AI and PII redaction metrics."""
    response = client.get("/governance/posture")
    assert response.status_code == 200
    assert response.json()["overall_score"] > 90

def test_analytics_summary_reporting():
    """Ensure the platform reports token usage and total AI spend."""
    response = client.get("/analytics/summary")
    assert response.status_code == 200
    assert "total_inferences" in response.json()
    assert "total_spend_usd" in response.json()
