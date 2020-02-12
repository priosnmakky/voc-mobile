import React from 'react';
import { StyleSheet, Dimensions, ScrollView,View,Text,Platform ,ImageBackground,Image} from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import axios from 'axios';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  constructor(props: Props)
  {
           super(props); 

    this.state = {
    name: ''
   }
  }
  componentDidMount(){
       this.getData();
      }
  async getData(){
          
         const res = await axios.get('http://hosmergeserver.com/hosmerge/voc/wp-json/wp/v2/media/2059');
         const { data } = await res;
          this.setState({name: data.id})
      
  }
  // renderArticles = () => {
  //   return (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={styles.articles}>
  //       <Block flex>
  //         <Card item={articles[0]} horizontal  />
  //         <Block flex row>
  //           <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
  //           <Card item={articles[2]} />
  //         </Block>
  //         <Card item={articles[3]} horizontal />
  //         <Card item={articles[4]} full />
  //       </Block>
  //     </ScrollView>
  //   )
  // }

  render() {
    return (
 
        <View style={styles.container}>
       
            <ImageBackground style={styles.ImageBackground} source={require('../assets/imgs/cmu.png')}>
                <Text>
                  {this.state.name}
                </Text>
               
            </ImageBackground >
            
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight 
  },
  ImageBackground: {
    flex: 1,
    height: 170,
    flexDirection: 'column',
    justifyContent: 'center',
  },


});

export default Home;
