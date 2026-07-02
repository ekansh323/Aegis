from sqlalchemy import Column, Integer, String, Text, ForeignKey, JSON
from sqlalchemy.orm import relationship
from app.database.base import Base

class Finding(Base):
    __tablename__ = "findings"

    id = Column(Integer, primary_key=True, index=True)
    investigation_id = Column(Integer, ForeignKey("investigations.id"))
    title = Column(String)
    category = Column(String)
    severity = Column(String)
    summary = Column(Text)
    evidence = Column(Text)
    recommendation = Column(Text)
    references = Column(JSON)

    investigation = relationship("Investigation", back_populates="findings")
