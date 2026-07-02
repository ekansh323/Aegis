from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.database.base import Base

class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    investigation_id = Column(Integer, ForeignKey("investigations.id"))
    report_type = Column(String)
    generated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    file_path = Column(String)

    investigation = relationship("Investigation", back_populates="reports")
