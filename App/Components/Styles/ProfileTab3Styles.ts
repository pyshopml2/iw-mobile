import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  listItem: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch'
  },
  listItemInner: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'flex-start'
  },
  listItemTitle: {
    color: '#969FAA',
    fontFamily: 'OpenSans_semi',
    fontSize: hp('2.4%')
  },
  listItemText: {
    fontSize: hp('1.95%'),
    marginTop: hp('0.97%')
  },
  listItemFollow: {
    marginTop: 0
  },
  socBtn: {
    marginRight: hp('2%')
  },
  socIcon: {
    width: hp('3.97%'),
    height: hp('3.97%')*35/30
  },
  socIcons: {
    marginTop: hp('0.97%')
  }
});