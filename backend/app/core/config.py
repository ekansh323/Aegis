from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "Aegis"
    DATABASE_URL: str = "sqlite:///./aegis.db"
    OLLAMA_BASE_URL: str = "http://localhost:11434"
    OLLAMA_MODEL: str = "llama3"
    API_PREFIX: str = "/api/v1"

    class Config:
        env_file = ".env"

settings = Settings()
