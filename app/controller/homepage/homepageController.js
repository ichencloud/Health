var React = require('react-native');
var styles = require('../../../app/styles/homepage/homepageStyles')

var {
  ListView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} = React;

/********************************************************
 *
 * 顶部区域
 * 
 ********************************************************/
var TopView = React.createClass({
  render() {
    return (

      //顶部区域
      <View style= {styles.topRegion}>


      <View style={styles.topSubUpRegion}>



      <Image style={[styles.weatherRegion]}   source={require('image!home_weather')}>
      <Text style={styles.temperatureText}>3°</Text>
      <Image style={styles.weatherIcon} source={require('image!home_weather')}></Image>
      </Image>

  
      <View style={styles.userHeaderRegion}>
      <Image style={{flex:1, resizeMode:Image.resizeMode.contain}} source={{uri:'http://oss.aliyuncs.com/tcxy/test/organization/bdfdd9d94a9d48518d4bfb263cc5ae72.jpg'}} />
      </View>


      <Image style={styles.changeUserRegion}   source={require('image!home_changeUser')}></Image>

      </View>

      <View style={styles.topSubDownRegion}>
            <Text style={[styles.defaultTextStyle,styles.userHeaderText]}>我是神仙一号 </Text>

      </View>


      </View>);
  }
});


/********************************************************
 *
 * 九宫格
 * 
 ********************************************************/

var OneNineBoxView = React.createClass({

  render() {
    return (

      <TouchableOpacity accessible={true} accessibilityLabel={'Tap me!'} >
      <View style={styles.oneBoxRegion}> 
      <Image style={styles.oneBoxImage} source={require(this.props.imageName)} />
      <Text style={[styles.defaultTextStyle, styles.oneBoxText]}>{this.props.name}</Text>
      </View>
      </TouchableOpacity>

    );
  }
});

var NineSquareView = React.createClass({
  render() {
    return (<View style={styles.nineBoxRegion}>

      <View style={styles.rowNineBoxRegion}>

      <OneNineBoxView style={[styles.oneBoxRegion]} name='检测中心' imageName='image!homepage-568h'/>
      <OneNineBoxView style={[styles.oneBoxRegion]} name='个人健康' imageName='image!homepage-568h'/>
      <OneNineBoxView style={[styles.oneBoxRegion]} name='健康咨询' imageName='image!homepage-568h'/>

      </View>


      <View style={styles.rowNineBoxRegion}>

      <OneNineBoxView style={[styles.oneBoxRegion]} name='亲情关注' imageName='image!homepage-568h'/>
      <OneNineBoxView style={[styles.oneBoxRegion]} name='小云圈子' imageName='image!homepage-568h'/>
      <OneNineBoxView style={[styles.oneBoxRegion]} name='我的小云' imageName='image!homepage-568h'/>
     
      </View>

      </View>);
  }
});


/********************************************************
 *
 * 机构
 * 
 ********************************************************/
var OrgnizationView = React.createClass({
  render() {
    return (<View style={styles.organizationRegion}>

    <Image style={{flex:1, resizeMode:'contain'}} source={{uri:'http://oss.aliyuncs.com/tcxy/test/organization/bdfdd9d94a9d48518d4bfb263cc5ae72.jpg'}} />
      </View>);
  }
});


/********************************************************
 *
 * 广告
 * 
 ********************************************************/
var BannerView = React.createClass({
  render() {
    return (<View style={styles.bannerRegion}>
      <Text>sdfs</Text>
      </View>);
  }
});


//todo 图片加载方式需要更改成 load一次;
var HomepageController = React.createClass({

  render() {

    return (

      <View style={styles.container}>
   
    <Image style={styles.container}  source={require('image!homepage-568h')}>


    <ScrollView  contentContainerStyle={styles.contentContainer} >

    <TopView></TopView>

    <NineSquareView></NineSquareView>

    <OrgnizationView></OrgnizationView>

    <BannerView></BannerView>
   
      </ScrollView>
    </Image>


      </View>

    );
  }
});

module.exports = HomepageController;