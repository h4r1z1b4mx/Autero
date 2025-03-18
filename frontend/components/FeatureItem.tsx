interface FeatureItemProps {
    icon: React.ReactNode;
    text: string;
  }
  
  const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
    return (
      <div className="flex gap-2">
        <div>{icon}</div>
        <span>{text}</span>
      </div>
    );
  };
  
  export default FeatureItem;
  