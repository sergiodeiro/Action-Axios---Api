
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <SafeAreaView>
          <View style={styles.item}>
              <View>
                <Image style={{width:100,height:100}}source={{uri: this.props.item.foto}}/>
              </View>
              <View style={styles.detalheItem}>
                <Text style={{fontSize:18,color:'blue',marginBottom:5}}>{this.props.item.titulo}</Text>
                <Text>Valor: R${this.props.item.valor}</Text>
                <Text>Data de Publicação: {this.props.item.data_publicacao}</Text>
                <Text>Local de anúncio: {this.props.item.local_anuncio}</Text>
              </View>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
   item:{
       borderWidth:0.5
       ,borderColor: '#999'
       ,margin:10
       ,padding:10
       ,flexDirection:'row'
   }, detalheItem:{
      marginLeft: 20
      ,flex:1
   }
})
