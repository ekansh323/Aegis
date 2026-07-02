from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.database.base import Base

class Investigation(Base):
    __tablename__ = "investigations"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"))
    target = Column(String)
    investigation_profile = Column(String)
    status = Column(String, default="Queued")
    started_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, nullable=True)
    duration = Column(String, nullable=True)

    project = relationship("Project", back_populates="investigations")
    findings = relationship("Finding", back_populates="investigation")
    reports = relationship("Report", back_populates="investigation")
