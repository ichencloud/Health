var React = require('react-native');

var React = require('react-native');
var Dimensions = require('Dimensions');
var {
	width,
	height,
} = Dimensions.get('window');


var {
	StyleSheet,
} = React;

var styles = StyleSheet.create({
	contentContainer: {},
	container: {
		flex: 1,
		flexDirection: 'row',
	},


	defaultTextStyle: {
		color: 'white',
		textAlign: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent',
	},


	/********************************************************
	 *
	 * 顶部区域
	 * 
	 ********************************************************/
	topRegion: {
		//backgroundColor: '#ffff00',
		marginTop: 70,
		height: 120,
		flexDirection: 'column',
	},

	/**
	 * 
	用户头像，天气，切换用户 区域
	 */
	topSubUpRegion: {
		//backgroundColor: '#ff0000',
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	//天气
	weatherRegion: {
		//backgroundColor: '#00ffff',
		marginLeft: 0,
		marginTop: 20,
		height: 40,
		width: 73,
		alignSelf: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	//天气温度
	temperatureText: {
		textAlign: 'center',
		justifyContent: 'center',
		alignSelf: 'center',

		fontSize: 18,
		color: 'red',
		marginLeft: 5,
		width: 30,
		height: 30,

	},
	weatherIcon: {
		width: 30,
		height: 30,
		borderRadius: 15,

	},

	//用户头像
	userHeaderRegion: {
		//backgroundColor: '#ff0f00',
		marginTop: 0,
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: "white",
	},

	//切换用户
	changeUserRegion: {
		//backgroundColor: '#999999',
		marginRight: 0,
		marginTop: 20,
		height: 40,
		width: 70,

	},

	/**
	 * 用户名
	 */
	topSubDownRegion: {
		//backgroundColor: '#003300',
		marginTop: 10,
	},
	//用户名字体
	userHeaderText: {
		//backgroundColor: '#323313',
		fontSize: 20,
		textAlign: 'center',
	},

	/********************************************************
	 *
	 * 九宫格
	 * 
	 ********************************************************/
	nineBoxRegion: {
		//backgroundColor: '#000000',
		marginTop: 10,
		height: 230,
		justifyContent: 'space-between',
		flexDirection: 'column',

	},

	//一行的九宫格 
	rowNineBoxRegion: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 10,
		marginRight: 10,
	},

	//每个格子
	oneBoxRegion: {
		backgroundColor: '#333300',
		width: 90,
		height: 110,
		flexDirection: 'column',

		alignItems: 'center',
	},

	oneBoxImage: {
		backgroundColor: 'red',
		width: 50,
		height: 50,
		marginTop: 20,
	},

	//每个格子字体样式
	oneBoxText: {
		marginTop: 10,
	},

	/********************************************************
	 *
	 * 机构
	 * 
	 ********************************************************/
	organizationRegion: {
		//backgroundColor: '#001234',
		marginTop: 10,
		height: 60,
		marginLeft: 10,
		marginRight: 10,
	},


	/********************************************************
	 *
	 * 广告
	 * 
	 ********************************************************/
	bannerRegion: {
		//backgroundColor: '#0000ff',
		marginTop: 10,
		marginBottom: 20,
		height: 60
	},


	scrollView: {
		width: width,
		height: height,
	}
});

module.exports = styles;