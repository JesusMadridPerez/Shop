import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';



const CameraIconButton = ({ onPress, iconName }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={iconName} size={24} color="#DE1010" />
    </TouchableOpacity>
  );
};
export default CameraIconButton;
