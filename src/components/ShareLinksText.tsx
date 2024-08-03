import {StyleSheet, Text, View} from 'react-native';
import {Color, FontSize} from '../utils/globalstyles';
import { ShareLinksTextProps } from '../utils/interfaceProps';

const ShareLinksText: React.FC<ShareLinksTextProps> = ({fs}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.share, {fontSize: fs}]}>Share</Text>
      <Text style={[styles.links, {fontSize: fs}]}>Links</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  share: {
    color: Color.black,
    fontWeight: '700',
  },
  links: {
    color: Color.logoYellow,
    fontWeight: '700',
  },
});
export default ShareLinksText;
