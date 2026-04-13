import React from 'react';
import { 
  ClipboardList, 
  Users, 
  Upload, 
  CheckCircle 
} from 'lucide-react';
import './ProcessStep.css';

const iconMap = {
  ClipboardList,
  Users,
  Upload,
  CheckCircle
};

const ProcessStep = ({ step, index, delay = 0 }) => {
  const Icon = iconMap[step.icon] || ClipboardList;

  return (
    <div 
      className="process-step animate-fadeInUp" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="step-number">{index + 1}</div>
      <div className="step-icon">
        <Icon size={40} />
      </div>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-description">{step.description}</p>
    </div>
  );
};

export default ProcessStep;
