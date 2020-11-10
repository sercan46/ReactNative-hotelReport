import React from 'react';  // React Ana kütüphanesi
import { 
      FlatList,
      ActivityIndicator,
      Text,
      View,
      StyleSheet,
      Image,
      TouchableOpacity,
      Dimensions,
      StatusBar,
      Platform,
      ImageBackground,
      BackHandler,
      Alert,
      } from 'react-native';  //Eklenen elementler
import Moment from 'moment';   // Tarih formatı
import DatePicker from 'react-native-datepicker'; // Tarih bileşeni eklendi
import PureChart from 'react-native-pure-chart';  // Grafik bileşeni eklendi
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Kaydıraç eklendi
import PTRView from 'react-native-pull-to-refresh';  // Yenileme butonu eklendi
import { createStackNavigator, createAppContainer } from 'react-navigation';  // Yeni form açma kütüphanesi eklendi
import { SearchBar } from 'react-native-elements';  // Arama kısmı oluşturuldu..
    width=375;// Sayfa genişliği verildi

  // ANASAYFA CLASSI...

  class DetailsScreen extends React.Component { 
    static navigationOptions = { // Navigationa css özellikleri eklendi..
        title: 'AnaSayfa',
        headerStyle: {
          backgroundColor: '#656275',          
        },
        headerTintColor: '#e0e0e0',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    _refresh=()=> { // Sayfa yenileme classı
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000) // 3 Saniyede yenilenme sağlanacaktır
        });    
    }
    constructor(props){
    super(props);
    this.state ={ // Değişken tanımlamaları
        isLoading: false, // Verilerin yüklenmesi true değerini aldı
      };
    }
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.backPressed); // Sayfa kapatma classı
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
      Dimensions.removeEventListener('change');      
    }
    backPressed = () => { // Sayfayı kapatma onay kısmı
    Alert.alert(
      'Exit App',
      'Exiting The Application?', 
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, 
        {text: 'Yes', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false });
      return true;
    }
    
    render() {
        if(this.state.isLoading){
          return(     
            //Giriş kısmındaki yenileme butonu oluşturuldu  
            <View style={ [styles.girispenceresi, styles.girispenceresicember]}>
            <ActivityIndicator size="large" color='red' /> 
            </View>
          )
        }
    return (      
   <PTRView  onRefresh={this._refresh}> 
      <View style = {{backgroundColor:"#656275"}}>
        <Text style = { styles.text }></Text>
      </View>
        <View style={{flex: 1, paddingTop:20,backgroundColor:'#656275',alignContent:'center',justifyContent:'center'}}>          
            <View style={{width: '100%', height: '100%'}}>
             <ImageBackground source={require('./assets/backgri.png')} style={{width: '100%', height: '100%'}}>
              <View style={{flex: 1,alignContent:'center',justifyContent:'center'}}>
              <Text style={{height:80,textAlign:"center",color:'white',fontSize:22}}>   Welcome {'\n'} <Text style={{textAlign:"center",color:'white',fontSize:13}}>  to Europrotel App</Text> </Text>
              <View style={{flexDirection:'row'}}>
                <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' ,marginLeft:50,borderWidth:1,borderLeftWidth:0,borderBottomWidth:1, borderTopWidth:0, borderColor:'white'}}> 
                 <View>                 
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} >
                    <Image source={require('./assets/forecast.png')} style={{width:100,height:100}}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold',fontSize:18,  color:"white",textAlign:"center"}}>Forecast</Text>
                    <Text>  </Text>
                  </View>
                 </View>
                <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center',marginRight:50,borderWidth:1,borderTopWidth:0,borderBottomWidth:1,borderRightWidth:0,borderColor:'white'}}> 
                 <View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details2')} >
                    <Image source={require('./assets/hotelstatu.png')} style={{width: 100,height:100,marginRight:35}}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold',fontSize:18,  color:"white",textAlign:"center"}}>Hotel Status</Text>
                    <Text>  </Text>
                  </View>
                 </View>
                </View> 
               <View style={{flexDirection:'row'}} >
                <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center',marginLeft:50,borderWidth:1,borderLeftWidth:0,borderBottomWidth:1,borderTopWidth:0,borderColor:'white'}}> 
                 <View>
                 <Text>  </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details3')}>
                  <Image source={require('./assets/boardstatu.png')} style={{width: 100 ,height:100}}/>
                  </TouchableOpacity>
                 <Text style={{fontWeight: 'bold',fontSize:18,  color:"white",textAlign: "center"}}>Board Status</Text>
                 <Text>  </Text>
                </View>
               </View>
              <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center',marginRight:50,borderWidth:1,borderRightWidth:0,borderBottomWidth:1,borderTopWidth:0,borderColor:'white'}}> 
               <View>
               <Text>  </Text>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Details4')}>
                  <Image source={require('./assets/inhouse.png')} style={{width:100,height:100,marginRight:35}}/>
                  </TouchableOpacity>
                 <Text style={{fontWeight: 'bold',fontSize:18,  color:"white",textAlign:"center"}}>In House</Text>
                 <Text>  </Text>
                </View>
               </View>    
              </View>
              <View style={{flexDirection:'row'}} >
               <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center',marginLeft:50,borderWidth:1,borderLeftWidth:0,borderTopWidth:0,borderColor:'white',borderBottomWidth:0}}> 
                <View>
                <Text>  </Text>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Details6')}>
                  <Image source={require('./assets/revenue.png')} style={{width: 100,height:100}}/>
                  </TouchableOpacity>
                 <Text style={{fontWeight: 'bold',fontSize:18,  color:"white",textAlign: "center" }}>Revenue</Text>
                 <Text>  </Text>
                  </View>
                 </View>         
                <View style={{ flex: 1, alignItems: 'baseline',marginRight:50, justifyContent: 'center',borderWidth:1,borderRightWidth:0,borderTopWidth:0,borderColor:'white',borderBottomWidth:0}}> 
                 <View>  
                 <Text>  </Text>                 
                 <TouchableOpacity onPress={() => this.backPressed()} >
                  <Image source={require('./assets/exitt.png')} style={{width: 100 ,height:100,marginRight:35}}/>
                  </TouchableOpacity>
                 <Text style={{fontWeight: 'bold',fontSize:18,  color:"white",textAlign:"center"}}>Exit</Text>
                 <Text>  </Text> 
                 </View>                
               </View>
              </View>                
           </View>
           <Text style={{height:40}}> </Text>
          </ImageBackground>
        </View>
      </View> 
  </PTRView>
      );  
    }
  }

  //  FORECAST CLASSI------

  class  FetchForecast extends React.Component {
    static navigationOptions = {  //  Navigation css'i verildi.. 
        title: 'Forecast',
        headerStyle: {
          backgroundColor: '#abaeb5',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    _refresh=()=> { // Sayfa yenileme classı..
        return new Promise((resolve) => {
          setTimeout(()=>{resolve()}, 2000)
        });
    }
    constructor(props){
      super(props);
      var adate = new Date();      
      this.state ={  // Değişken tanımlamaları..
        isLoading: true, 
        adate : new Date(),
        date: new Date(), // Tarih verildi..
        address:'http://85.98.211.9:35915/api/Forecast/'+Moment(adate).format('YYYY-MM-DD'),// Link uzantısı verildi..
        doluluk : [],   // doluluk dizi olarak tanımlandı..
        dataSource:[],  // dataSource dizi olarak tanımlandı..
        };   
        this.componentDidMount(); 
     }     
    _onPress = () => {  
      this.componentDidMount();     
    } 
    componentDidMount(){  
       // Web servis ile bağlantısı kuruldu..
      return fetch(this.state.address)
        .then((response) => response.json())
        .then((responseJson) => { //  responsejson ile veriler çekiliyor 
          this.setState({
            isLoading: false,
            dataSource: responseJson.forecast,           
          },          
        );
        const tmpdoluluk = this.state.dataSource.map(item => {
          return { x: item.Tarih, y: item.DoluOda };
        });  
        this.setState({ doluluk:tmpdoluluk });
        })        
        .catch((error) =>{
          console.error(error);
        });
    }       
      render(){          
      if(this.state.isLoading){        
        return(           
          //Giriş kısmındaki yenileme butonu oluşturuldu.     
          <View style={ [styles.girispenceresi, styles.girispenceresicember]}>             
            <ActivityIndicator size="large" color='red' /> 
          </View>
        )
      }
    return(      
    <PTRView  onRefresh={this._refresh} >
      <KeyboardAwareScrollView>
        <View style = {{ backgroundColor:"#abaeb5" }}>
        <Text style = { styles.text }></Text>
        </View>
        <View style={{flex: 1, paddingTop:20,backgroundColor:"#abaeb5"}}>
          <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center'}}>
            <Image source={require('./assets/footer.png')} style={{width: 375,height:115,borderWidth:1,borderColor:'#abaeb5'}}/></View>
            <View style={{backgroundColor:"#595B67"}}>
            <Text style={{fontWeight: 'bold',fontSize:20,  color:"#ffffff",textAlign: "center" }}> BW ÇEŞME </Text>
            <Text style={{color:"#c96a50"}}>                 </Text>
            <View style={{flexDirection:'row'}}> 
          <View>
            <DatePicker    style={{width: 150}} style={{width:200}}
              date={this.state.date}
              mode="date"
              placeholder='Tarih Seçiniz!'
              format="YYYY-MM-DD"
              minDate="01-01-1970"
              maxDate="31-12-2099"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },  
            dateInput: {
                color:'red',
              marginLeft: 36,
              backgroundColor:'#dedada',
            }}}
              onDateChange={(date) => {
                this.setState(
                  {address: 'http://85.98.211.9:35915/api/Forecast/'+Moment(date).format('YYYY-MM-DD'),
                  date : date
                }); 
              }}
            />
            </View>
          <View>
            <TouchableOpacity onPress={this._onPress}
            style={styles.gösterbuton}
            underlayColor='#fff'>
            <Text style={styles.butonicitext}>Raporla</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
          <Text style={{backgroundColor:"#595B67",height:15}}>  </Text>
          <View>
            <StatusBar hidden />
            <View style={{ width:width, flexDirection: 'row',borderTopWidth:1,borderTopColor:'white',backgroundColor:'#595B67'}}>
              <View style={[{width:width/8*2},styles.headerTitleContainer]}>
                <Text style={{color:'#DCDBD9',fontWeight:'bold'}}>Tarih</Text>
              </View>
              <View style={[{width:width/8},styles.headerTitleContainer]}>
                  <Text style={{color:'#DCDBD9',fontWeight:'bold',textAlign:"right"}}>Hazir Oda</Text>
              </View>
              <View style={[{width:width/8},styles.headerTitleContainer]}>
                <Text style={{color:'#DCDBD9',fontWeight:'bold',textAlign:"right"}}>Bos Oda</Text>
              </View>
              <View style={[{width:width/8},styles.headerTitleContainer]}>
                <Text style={{color:'#DCDBD9',fontWeight:'bold',textAlign:"right"}}>Dolu Oda</Text>
              </View>
              <View style={[{width:width/8},styles.headerTitleContainer]}>
                <Text style={{color:'#DCDBD9',fontWeight:'bold',textAlign:"right"}}>Dolu.<Text style={{color:'#DCDBD9'}}>  (%)</Text></Text>
              </View>
              <View style={[{width:width/8*2},styles.headerTitleContainer]} >
                <Text style={{color:'#DCDBD9',fontWeight:'bold',textAlign:"right",marginRight:15}}>Oda Geliri</Text>
              </View>
            </View>       
        <View style={styles.listegövde} style={{width: width}}>
        <FlatList
              data={this.state.dataSource}
              extraData={this.state}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <View style={{ width:width, flexDirection: 'row',backgroundColor: ( Moment(item.Tarih, 'DD.MM.YYYY').isoWeekday() == 6) ? "#fdffbe" : ( Moment(item.Tarih, 'DD.MM.YYYY').isoWeekday() == 7) ? "#d0ffd5" : "#f0f0f0"}}  >
                  <View style={[{width:width/8*2,},styles.headerTitleContainer]}>
                    <Text style={{fontSize:11}} >{item.Tarih}<Text></Text></Text>
                  </View>
                  <View style={[{width:width/8},styles.headerTitleContainer]}>
                    <Text style={{fontSize:11,textAlign:"right"}}>{item.SatilabilirOda}</Text>
                  </View>
                  <View style={[{width:width/8},styles.headerTitleContainer]}>
                    <Text style={{fontSize:11,textAlign:"right"}}>{item.BosOda}</Text>
                  </View>
                  <View style={[{width:width/8},styles.headerTitleContainer]}>
                    <Text style={{fontSize:11,textAlign:"right"}}>{item.DoluOda}</Text>
                  </View>                 
                  <View style={[{width:width/8},styles.headerTitleContainer]}>
                    <Text style={{fontSize:11,textAlign:"right"}}>{item.Doluluk.toFixed(1)}</Text>
                  </View>
                  <View style={[{width:width/8*2},styles.headerTitleContainer]}>
                    <Text style={{fontSize:11,textAlign:"right",marginRight:14}}>{item.OdaGeliri.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                  </View>
                </View>
            )}
          />  
        </View>          
      </View>
    </View>
    <Text style={{fontWeight: 'bold',fontSize:20,  color:'#DCDBD9',backgroundColor:'#595B67',textAlign:'center'}}>Grafik</Text>
      <Text>  </Text>
      <View>
          <PureChart type={'line'}        
           minValue={10}
             showEvenNumberXaxisLabel={false}
             data={this.state.doluluk}
             yAccessor={({ item }) => y}
             xAccessor={({ item }) => x}
             width={'100%'}
             height={90}
             xAxisGridLineColor={'#d4d4d4'}
             customValueRenderer={(index, point) => {                   
              return (
                <Text style={{textAlign: 'center',color:'red',fontWeight:'bold',fontSize:10}}>{point.y}</Text>
                )
            }}
            />                  
        </View>  
      </KeyboardAwareScrollView>
    </PTRView>
      );
    }
  }

// HOTEL STATÜ CLASSI----------

    class FetchHotel extends React.Component {
        static navigationOptions = {
          title: 'Hotel Status',
          headerStyle: {
            backgroundColor: '#abaeb5',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        };
      _refresh=()=> {
            return new Promise((resolve) => {
              setTimeout(()=>{resolve()}, 2000)
            });
        }
          constructor(props){
          super(props);
          this.state ={ 
            isLoading: true,
            address:'http://85.98.211.9:35915/api/HotelStatus/',
            showResim:true
            };
        }    
        componentDidMount(){   
          return fetch(this.state.address)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                isLoading: false,
                dataSource: responseJson.hotelh, 
              }, 
            );
          })      
            .catch((error) =>{
              console.error(error);
            });
        }
        render(){
          if(this.state.isLoading){
            return(          
              <View style={ [styles.girispenceresi, styles.girispenceresicember]}>
              <ActivityIndicator size="large" color='red' />
              </View>
            )
          }
        return(
          <PTRView  onRefresh={this._refresh} >
            <KeyboardAwareScrollView>
                <View style = {{ backgroundColor:"#abaeb5" }}>
                  <Text style = { styles.text }></Text>
                </View>
                <View style={{flex: 1, paddingTop:20,backgroundColor:"#abaeb5"}}>
                  <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center'}}>
                    <Image source={require('./assets/footer.png')} style={{width: 375,height:115,borderWidth:1,borderColor:'#abaeb5'}}/></View>
                    <View style={{backgroundColor:"#595B67"}}>
                    <Text style={{fontWeight: 'bold',fontSize:20,  color:'white',textAlign:"center",}}>BW ÇEŞME </Text>
                    </View>
                    <Text style={{backgroundColor:"#595B67",height:10}}>  </Text>
                    <View>
                    <StatusBar hidden />
                    <View style={{ width:width, flexDirection: 'row',borderTopWidth:1,borderTopColor:'white',backgroundColor:'#595B67'}}>
                      <View style={[{width:width/6*2},styles.headerTitleContainer]}>
                        <Text style={{color:'#DCDBD9',fontWeight:'bold',textAlign:"left",fontSize:12,}}>Açıklama</Text>
                      </View>
                      <View style={[{width:width/6,},styles.headerTitleContainer]}>
                        <Text style={{color:'#DCDBD9',fontWeight:'bold',fontSize:12,textAlign:'center'}}>Oda</Text>
                      </View>
                      <View style={[{width:width/6},styles.headerTitleContainer]}>
                        <Text style={{color:'#DCDBD9',fontWeight:'bold',fontSize:12,textAlign:'center'}}>Yetişkin</Text>
                      </View>
                      <View style={[{width:width/6},styles.headerTitleContainer]}>
                        <Text style={{color:'#DCDBD9',fontWeight:'bold',fontSize:12,textAlign:'center'}}>C1</Text>
                      </View>
                      <View style={[{width:width/6},styles.headerTitleContainer]}>
                        <Text style={{color:'#DCDBD9',fontWeight:'bold',fontSize:12,textAlign:'center'}}>C2</Text>
                      </View>
                    </View>       
                  <View style={styles.listegövde} style={{width:width}}>
                    <FlatList
                        data={this.state.dataSource}
                        extraData={this.state}
                        keyExtractor={({id}, index) => id}
                        renderItem={({item}) => (
                          <View style={{ width:width, flexDirection: 'row' ,backgroundColor:"#ffdee0" }}  >
                            <View style={[{width:width/6*2,},styles.headerTitleContainer]}  >
                              <Text style={{fontSize:11,flex:1,marginTop:9}}>{item.Statü}</Text>
                            </View>
                            <View style={[{width:width/6},styles.headerTitleContainer]}>
                              <Text style={{fontSize:11,textAlign:'center',flex:1,marginTop:9}}>{item.Oda}</Text>
                            </View>
                            <View style={[{width:width/6},styles.headerTitleContainer]}>
                              <Text style={{fontSize:11,textAlign:'center',flex:1,marginTop:9}}>{item.Kişi}</Text>
                            </View>
                            <View style={[{width:width/6},styles.headerTitleContainer]}>
                              <Text style={{fontSize:11,textAlign:'center',flex:1,marginTop:9}}>{item.Cocuk1}</Text>
                            </View>
                            <View style={[{width:width/6},styles.headerTitleContainer]}>
                              <Text style={{fontSize:11,textAlign:'center',flex:1,marginTop:9}}>{item.Cocuk2}</Text>
                            </View>
                          </View>
                        )}
                    />                  
                  </View>
                  </View>
                </View> 
              </KeyboardAwareScrollView>
            </PTRView>
                );
              }
            }

const extractKey = ({SubDepartments}) => SubDepartments
const products = [];

        class FetchRevenue extends React.Component {
          
          static navigationOptions = {
            title: 'Revenue',
            headerStyle: {
              backgroundColor: '#abaeb5',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          };
              _refresh=()=> { // Sayfa yenileme classı..
                return new Promise((resolve) => {
                  setTimeout(()=>{resolve()}, 2000)
                });
            }         
              constructor(props){
              super(props);
            //  this.onPress = this.onPress.bind(this);
              var date1 = new Date();
              var date2 = new Date(); 
              this.state ={  // Değişken tanımlamaları..
                isLoading: true, 
                address:'http://85.98.211.9:35915/api/Revenue/'+Moment(date1).format('YYYY-MM-DD')+'/'+Moment(date2).format('YYYY-MM-DD'),  // Link uzantısı verildi..
                dataSource:[],  // dataSource dizi şeklinde tanımladık..
                date1 : new Date(),
                date2 : new Date(),
                products,
                totalPrice:0,
                oldPrice:0,
                isOdaNo:'',
                status:false,
              };
               // this.componentDidMount();                      
            } 
            onPress = (rno) => {  
              if(this.state.status == true)  {                      
              this.setState({ 
                isOdaNo : rno, 
                status:false, 
                totalPrice:0,
                oldPrice:0,
             })
            }
            else
            {
             this.setState({
               status: true, 
              isOdaNo : rno,                
              totalPrice:0,
              oldPrice:0,
             })
            }
             this.componentDidMount();
            }
                                 
            _onPress = () => {               
              this.setState({                
                totalPrice:0,
                oldPrice:0, 
                dataSource:[],                            
                });    
                            
                this.componentDidMount(); 
            }           
           
             componentDidMount(){// Web servis ile bağlantısı kuruldu..
              return fetch(this.state.address)
                .then((response) => response.json())
                .then((responseJson) => {                  
                  this.setState({
                    isLoading: false,
                    dataSource: responseJson.revenue,                                      
                  },
                );       
              
              this.state.dataSource.forEach((item) => {                
                 this.state.oldPrice += item.TotalRevenue; 
                  })                
                  this.setState({totalPrice:this.state.oldPrice})
                })  

                 .catch((error) =>{
                  console.error(error);
                });
            }

            renderItem = ({item}) => {
              this.state.totalPrice +=  item.TotalRevenue;             
              let items = [];
              if(item.SubDepartments) {
                if(item.DepartmentName==this.state.isOdaNo&&this.state.status){
                items = item.SubDepartments.map(row => {
                  return(
                    <View style={{ width:width,flex:1, flexDirection: 'row',backgroundColor:'#ffe7e0'}}>                      
                    <View style={[{width:width/3*2,flex:1},styles.headerTitleContainer]}>
                      <Text style={{color:'#d42240',fontWeight:'bold',fontSize:12,flex:1,marginLeft:35,marginTop:9}}>{row.SubDepartmentName}</Text>
                    </View>                           
                    <View style={[{width:width/3,flex:1},styles.headerTitleContainer]}>
                      <Text style={{color:'#d42240',fontWeight:'bold',fontSize:12,textAlign:"right",flex:1,marginRight:15,marginTop:9}}>{row.TotalRevenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')} TRY</Text>
                    </View>                 
                  </View>
                   )
                })
              }              
              return (                         
                <View>
                    <View style={{ width:width, flexDirection: 'row',borderColor:'#d4abae',backgroundColor:'#ffdee0',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>this.onPress(item.DepartmentName)}>                    
                  <View style={[{width:width/3*2,flex:1,justifyContent:'center'},styles.headerTitleContainer]}>                
                   <Text style={{fontWeight:'bold',fontSize:12,flex:1,justifyContent:'center',marginTop:9}}>{item.DepartmentName}</Text>  
                   </View>
                   </TouchableOpacity > 
                   <View style={[{width:width/3,flex:1},styles.headerTitleContainer]}>                                      
                   <Text style={{fontWeight:'bold',fontSize:12,textAlign:"right",flex:1,marginRight:15,marginTop:9}}>{item.TotalRevenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')} TRY</Text>
               </View>              
                  </View>
                  {items}                  
                </View>
              )
            } 
          }
            render(){    
              if(this.state.isLoading){
                return(     
                  //Giriş kısmındaki yenileme butonu oluşturuldu.     
                  <View style={ [styles.girispenceresi, styles.girispenceresicember]}>
                  <ActivityIndicator size="large" color='red' /> 
                  </View>
                )
              }              
              return(
            <PTRView  onRefresh={this._refresh} >
              <KeyboardAwareScrollView>
                <View style = {{ backgroundColor: "#abaeb5" }}>
                </View>
                <View style={{flex: 1, paddingTop:20,backgroundColor:"#abaeb5"}}>
                  <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center'}}>
                    <Image source={require('./assets/footer.png')} style={{width: 375,height:115,borderWidth:1,borderColor:'#abaeb5'}}/></View>
                    <View style={{backgroundColor:"#595B67"}}>
                    <Text style={{fontWeight: 'bold',fontSize:20,  color:"#ffffff",textAlign: "center",}}> BW ÇEŞME </Text>
                    <Text style={{color:"#c96a50"}}>                 </Text>
                    <View style={{flexDirection:'row'}}> 
                  <View>
                    <DatePicker    style={{width:150}}                        
                      date={this.state.date1}
                      mode="date"
                      placeholder="İlk Tarih!"
                      format="YYYY-MM-DD"
                      minDate="01-01-1970"
                      maxDate="31-12-2099"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                      dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                      dateInput: {
                      marginLeft: 36,
                      backgroundColor:'#dedada',
                    }}}
                      onDateChange={(date) => {
                      this.setState(
                        {
                          totalPrice:this.state.totalPrice-this.setState.totalPrice,
                          address: 'http://85.98.211.9:35915/api/Revenue/'+Moment(date).format('YYYY-MM-DD')+'/'+Moment(this.state.date2).format('YYYY-MM-DD'),
                          date1 : date,  
                        });
                      }}
                    />
                    <Text> </Text>
                    
                    <View>
                      
                    <DatePicker    style={{width: 150}}
                      date={this.state.date2}
                      mode="date"
                      placeholder="Son Tarih!"
                      format="YYYY-MM-DD"
                      minDate="01-01-1970"
                      maxDate="31-12-2099"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                      dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },     
                      dateInput: {
                      marginLeft: 36,
                      backgroundColor:'#dedada',
                    }}}
                    
                      onDateChange={(date) => {  
                     this.setState(                       
                        {
                          totalPrice:this.state.totalPrice-this.setState.totalPrice,
                          address: 'http://85.98.211.9:35915/api/Revenue/'+Moment(this.state.date1).format('YYYY-MM-DD')+'/'+Moment(date).format('YYYY-MM-DD'),
                          date2 : date,
                        });
                      }}
                    />                         
         
                    </View>
                    </View>
                    <Text> </Text>
                  <View>
                    <TouchableOpacity onPress={this._onPress}  style={{width:120}}                   
                    style={styles.gösterbutonrevenue}
                    underlayColor='#fff'>
                    <Text style={styles.butonicitext2}>Raporla</Text>
                    </TouchableOpacity>
                  </View>
                  </View>
                  </View>
                  <Text style={{backgroundColor:"#595B67",height:10}}>  </Text>
                  <View>
                    <StatusBar hidden />
                    <View style={{ width:width, flexDirection: 'row',borderTopWidth:1,borderTopColor:'white',backgroundColor:'#595B67'}}>
                            <View style={[{width:width/3*2},styles.headerTitleContainer]}>
                            <Text style={{color:'#DCDBD9',fontWeight:'bold',fontSize:12}}>Department Name</Text>
                            </View>                           
                            <View style={[{width:width/3},styles.headerTitleContainer]}>
                              <Text style={{color:'#DCDBD9',fontWeight:'bold',fontSize:12,textAlign:"right",marginRight:16}}>Total Revenue</Text>
                            </View>
                          </View>       
                        <View style={styles.listegövde} style={{width: width}}>
                          <FlatList
                              data={this.state.dataSource}
                              extraData={this.state}
                              keyExtractor={extractKey}
                             renderItem={this.renderItem} 
                          />                         
                            <View style={{ width:width, flexDirection: 'row',borderWidth:1,backgroundColor:'#acbd8c'}}>
                            <View style={[{width:width/3*2},styles.headerTitleContainer]}>
                            <Text style={{color:'#292929',fontWeight:'bold',fontSize:12}}>Total Hotel Revenue</Text>
                            </View>                           
                            <View style={[{width:width/3},styles.headerTitleContainer]}>
                              <Text style={{color:'#292929',fontWeight:'bold',fontSize:12,textAlign:"right",marginRight:16}}>{this.state.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')} TRY</Text>
                            </View>
                          </View> 
                   </View>
                  <View>                  
                </View>
            </View>
            </View>
          </KeyboardAwareScrollView>
        </PTRView>
        );
      }
    }

// BOARD STATÜ CLASSI----

  class FetchBoard extends React.Component {
          static navigationOptions = {
            title: 'Board Status',
            headerStyle: {
              backgroundColor: '#abaeb5',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          };
        _refresh=()=> {
              return new Promise((resolve) => {
                setTimeout(()=>{resolve()}, 2000)
              });
          }
            constructor(props){
            super(props);
            this.state ={ 
              isLoading: true,
              address:'http://85.98.211.9:35915/api/BoardStatus/',
              showResim:true
              };
          }          
          componentDidMount(){   
            return fetch(this.state.address)
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  isLoading: false,
                  dataSource: responseJson.boardd,
                }, 
              );               
              })
              .catch((error) =>{
                console.error(error);
              });
          }
          render(){
            if(this.state.isLoading){
              return(          
                <View style={ [styles.girispenceresi, styles.girispenceresicember]}>
                <ActivityIndicator size="large" color='red' />
                </View>
              )
            }
          return(
              <PTRView  onRefresh={this._refresh} >
                <KeyboardAwareScrollView>
                  <View  style = {{backgroundColor:"#abaeb5"}}>
                    <Text style = { styles.text }></Text>
                  </View>
                  <View style={{flex: 1, paddingTop:20,backgroundColor:"#abaeb5"}}>
                    <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center'}}>
                     <Image source={require('./assets/footer.png')} style={{width: 375,height:115,borderWidth:1,borderColor:'#abaeb5'}}/></View>
                      <View style={{backgroundColor:"#595B67"}}>
                      <Text style={{fontWeight: 'bold',fontSize:20,  color:'white',textAlign:"center",}}>BW ÇEŞME</Text>
                      </View>
                      <Text style={{backgroundColor:"#595B67",height:10}}>  </Text>
                      <View>
                      <StatusBar hidden />
                      <View style={{ width:width, flexDirection: 'row',borderTopWidth:1,borderTopColor:'white',backgroundColor:'#595B67'}}>
                        <View style={[{width:width/5*2},styles.headerTitleContainer]}>
                            <Text style={{color:'#DCDBD9',fontWeight:'bold'}}>Pansiyon</Text>
                          </View>
                          <View style={[{width:width/5},styles.headerTitleContainer2]}>
                            <Text style={{color:'#DCDBD9',fontWeight:'bold'}}>Yetişkin</Text>
                          </View>
                          <View style={[{width:width/5},styles.headerTitleContainer2]}>
                            <Text style={{color:'#DCDBD9',fontWeight:'bold'}}>Çocuk 1</Text>
                          </View>
                          <View style={[{width:width/5},styles.headerTitleContainer2]}>
                            <Text style={{color:'#DCDBD9',fontWeight:'bold'}}>Çocuk 2</Text>
                          </View>
                        </View>       
                      <View style={styles.listegövde} style={{width:width}}>
                        <FlatList
                            data={this.state.dataSource}
                            extraData={this.state}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item}) => (
                              <View style={{ width:width, flexDirection: 'row' ,backgroundColor:"#ffdee0"}}>
                              <View style={[{width:width/5*2},styles.headerTitleContainer]}  >
                                  <Text style={{fontSize:11}} >{item.Board}</Text>
                                </View>
                                <View style={[{width:width/5},styles.headerTitleContainer2]}>
                                  <Text style={{fontSize:11}}>     {item.Adult}</Text>
                                </View>
                                <View style={[{width:width/5},styles.headerTitleContainer2]}>
                                  <Text style={{fontSize:11}}>     {item.Child1}</Text>
                                </View>
                                <View style={[{width:width/5},styles.headerTitleContainer2]}>
                                  <Text style={{fontSize:11}}>     {item.Child2}</Text>
                                </View>
                              </View>
                          )}
                        />
       
                      </View>
                    </View>
                   </View> 
                  </KeyboardAwareScrollView>
                </PTRView>
              );
           }
        }
               
//INHOUSE CLASSI --------------

        class FetchInhouse extends React.Component {
          static navigationOptions = {
            title: 'In House',
            headerStyle: {
              backgroundColor: '#abaeb5',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          };
         
          constructor(props){
              super(props);
              this.onPress = this.onPress.bind(this);
              this.state ={ 
                isLoading: true,
                address:'http://85.98.211.9:35915/api/InHouse',
                query : '',  
                dataSource: [],  
                dataBackup: [],
                isOdaNo:'',

             };
            } 
           onPress = (rno) => {                        
                this.setState({ isOdaNo : rno,               
             }); 
             this.componentDidMount()
              }
                      
            componentDidMount(){   
              return fetch(this.state.address)
                .then((response) => response.json())
                .then((responseJson) => {
                  this.setState({
                    isLoading: false,
                    dataSource: responseJson.househ,
                    dataBackup: responseJson.househ, 
            

                  }, 
                );                  
                })
                .catch((error) =>{
                  console.error(error);
                });
            }
            renderHeader = () => {  
              return (  
              <SearchBar 
                placeholder="Misafir Adını Giriniz!.."  
                icon={({ type: 'material' }, { color: 'black' }, { name: 'search' })}  
                clearIcon={({ color: 'black' }, { name: 'close' })}  
                round  
                lightTheme  
                value={this.state.query}  
                onChangeText={(text) => this.filterList(text)}  
              />  
              );  
            };  
            renderSeparator = () => {  
              return (  
              <View  
                style={{  
                height: 1,  
                width: '84%',  
                backgroundColor: "black",  
                marginLeft: '14%',  
                }}  
              />  
              );  
            };  
           filterList = (text) => {  
              var newData = this.state.dataBackup;  
              newData = this.state.dataBackup.filter((item)=>{  
              const itemData = item.Guest.toLowerCase()  
              const textData = text.toLowerCase()  
              return itemData.indexOf(textData)>-1  
              });  
              this.setState({  
              query:text,  
              dataSource: newData // after filter we are setting users to new array  
              });  
            }  
            render(){
              if(this.state.isLoading){
                return(          
                  <View style={ [styles.girispenceresi, styles.girispenceresicember]}>
                  <ActivityIndicator size="large" color='red' />
                  </View>
                )
              }
            return(          
              <KeyboardAwareScrollView>               
                <View style={{flex: 1, paddingTop:20,backgroundColor:"#abaeb5"}}>
                  <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center'}}>
                    <Image source={require('./assets/footer.png')} style={{width: 375,height:115,borderWidth:1,borderColor:'#abaeb5'}}/></View>
                    <View style={{backgroundColor:"#595B67"}}>
                    <Text style={{fontWeight: 'bold',fontSize:20,  color:'white',textAlign: "center"}}> BW ÇEŞME</Text>
                    </View>
                    <Text style={{backgroundColor:"#595B67",height:10}}>  </Text>
                    <View>
                    <StatusBar hidden />
                    <View style={{ width:width, flexDirection: 'row',borderTopWidth:1,borderTopColor:'white',backgroundColor:'#595B67'}}>
                      <View style={[{width:width/7},styles.headerTitleContainer]}>
                        <Text style={{color:'#ABAEB7',fontWeight:'bold',fontSize:9}}>Oda</Text>
                      </View>             
                      <View style={[{width:width/7*2},styles.headerTitleContainer]}>
                        <Text style={{color:'#ABAEB7',fontWeight:'bold',fontSize:9}}>İsim</Text>
                      </View>
                      <View style={[{width:width/7},styles.headerTitleContainer]}>
                        <Text style={{color:'#ABAEB7',fontWeight:'bold',fontSize:9}}>Pansion</Text>
                      </View>
                      <View style={[{width:width/7*2},styles.headerTitleContainer]}>
                        <Text style={{color:'#ABAEB7',fontWeight:'bold',fontSize:9}}>Tarihler</Text>
                        </View>
                      <View style={[{width:width/7},styles.headerTitleContainer]}>
                        <Text style={{color:'#ABAEB7',fontWeight:'bold',fontSize:9}}>Acente</Text>
                      </View>
                    </View>                 
                  <View style={styles.listegövde} style={{width: width}}>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={({id}, index) => id}
                        renderItem={({item}) => (
                          <View style={{flexDirection: 'column' ,backgroundColor:"#ffdee0"}}>
                            <View style={{ width:width, flexDirection: 'row' ,borderColor:'#d4abae',backgroundColor:'#ffdee0',justifyContent:'center',borderWidth:0}}>
                              <View style={[{width:width/7},styles.headerTitleContainerÖzel]}>
                                <Text style={{fontSize:8,marginTop:9}}>{item.RoomNo}</Text>
                              </View>
                              <TouchableOpacity  onPress={()=>this.onPress(item.RoomNo)}>                        
                              <View style={[{width:width/7*2,flex:1,borderWidth:0},styles.headerTitleContainerÖzel]}>                              
                                  <Text style={{fontSize:9,fontWeight:'bold',marginTop:9}}>{item.Guest}</Text>
                              </View>
                              </TouchableOpacity >
                              <View style={[{width:width/7,flex:1},styles.headerTitleContainerÖzel]}>
                                <Text style={{fontSize:9,marginTop:9}}>{item.Pansion}</Text>
                              </View>  
                              <View style={[{width:width/7*2,flex:1},styles.headerTitleContainerÖzel]}>
                                <Text style={{fontSize:9,marginTop:9}}>{item.Dates}</Text>
                              </View>
                              <View style={[{width:width/7,flex:1},styles.headerTitleContainerÖzel]}>
                                <Text style={{fontSize:9,marginTop:9}}>{item.Agency}</Text>
                              </View>                              
                             </View> 
                             {item.RoomNo==this.state.isOdaNo? (                        
                             <View style={{flexDirection: 'column' ,backgroundColor:"#ffdee0"}}>
                            <View style={{ width:width, flexDirection: 'row' ,backgroundColor:"#ffe7e0",height:42}}>
                            <View style={[{width:width/3},styles.headerTitleContainerInhouse]}>
                              <View style={{flexDirection:'row',flex:1}}> 
                             
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}>Logis</Text>                 
                              <Text style={{fontSize:9,textAlign: 'right',flex:1}}>{item.Folio.Logis.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                              </View>         
                              <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}>FB</Text>                 
                              <Text style={{fontSize:9,textAlign: 'right',flex:1}}>{item.Folio.FB.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                              </View>     
                              <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}>Extra</Text>                 
                              <Text style={{fontSize:9,textAlign: 'right',flex:1}}>{item.Folio.Extras.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                              </View>                                       
                          </View> 
                      <View style={[{width:width/3},styles.headerTitleContainerInhouse]}>
                      <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}> Cashless</Text>                 
                              <Text style={{fontSize:9,textAlign: 'right'}}>{item.Folio.Cashless.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                              </View>   
                              <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}> CC</Text>                 
                              <Text style={{fontSize:9,textAlign: 'right'}}>{item.Folio.CC.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                              </View>  
                              <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}> Banka Ödemesi</Text>                 
                              <Text style={{fontSize:9,textAlign: 'right'}}>{item.Folio.Bankpayment.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')}</Text>
                              </View>                                
                      </View> 
                      <View style={[{width:width/3},styles.headerTitleContainerInhouse]}>
                      <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}> Fiyat Kodu</Text>                 
                              <Text style={{fontSize:9,textAlign:'left',marginRight:15}}>{item.RateCode}</Text>
                              </View> 
                              <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}> Fiyat</Text>                 
                              <Text style={{fontSize:9,textAlign:'left',marginRight:15}}>{item.RatePrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g ,'$1,')} {item.CurName}</Text>
                              </View> 
                              <View style={{flexDirection:'row',flex:1}}>  
                              <Text  style={{color:'#d42240',fontWeight:'bold',fontSize:9,flex:1,textAlign:'left'}}> Res No</Text>                 
                              <Text style={{fontSize:9,textAlign:'left',marginRight:15}}>{item.Folio.ResNo}</Text>
                              </View> 
                      </View> 
                      </View>                         
                            </View>                    ) : null}
                       
                            </View>              
                      )}                      
                      ItemSeparatorComponent={this.renderSeparator}  
                      ListHeaderComponent={this.renderHeader}  
                    /> 
                  </View>
                </View>
              </View> 
            </KeyboardAwareScrollView>  
                );
              }
            }
  const RootStack = createStackNavigator(
      {
        Home: DetailsScreen,
        Details: FetchForecast,
        Details2:FetchHotel,
        Details3:FetchBoard,
        Details4:FetchInhouse,
        Details6:FetchRevenue,
      },
      {
        initialRouteName: 'Home',
      }   
  );
  const AppContainer = createAppContainer(RootStack);
  export default class App extends React.Component {
      render() {
        return <AppContainer />;
      }
  }
    // STİLLER  KISMI...

      const styles = StyleSheet.create({
        girispenceresi: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'black'
        },
        girispenceresicember: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10
        },
        buton:{
          fontSize:40,
          fontWeight: 'bold',
          color:'red',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor:'black'
        },
        gösterbuton:{
          width:120,
          marginRight:100,
          marginLeft:20,
          marginTop:5,
          paddingTop:5,
          paddingBottom:3,
          backgroundColor:'#dedada',          
          borderWidth: 3,
          borderColor: 'white'
        },
        gösterbutonrevenue:{
          marginRight:100,
          marginLeft:80,
          marginTop:30,
          paddingTop:1,
          paddingBottom:3,
          height:40,
          backgroundColor:'#dedada',          
          borderWidth: 3,
          borderColor: 'white',
          fontSize:15,
        },
        butonicitext:{
          color:'#aa4d59',
          fontSize:16,
          textAlign:'center',
          paddingLeft : 20,
          paddingRight : 20,
          fontWeight: 'bold',
        },
        butonicitext2:{
          color:'#aa4d59',
          fontSize:16,
          textAlign:'center',
          paddingLeft : 20,
          paddingRight : 20,
          paddingTop:8,
          fontWeight: 'bold',
        },
        listegövde:{
          backgroundColor: '#d4d4d4',
          borderWidth: 3,
          marginTop: 5
        },   
        headerTitleContainer: { 
            borderBottomWidth: 1,
            height: 40,
            borderColor: '#d4abae',
            textAlign:'right',
            justifyContent: 'center',
          }, 
          headerTitleContainerÖzel: { 
            borderBottomWidth: 1,
            height: 40,
            borderColor: '#d4abae',
            textAlign:'right',
            justifyContent: 'center',
          }, 
          headerTitleContainer2: { 
            borderBottomWidth: 1,
            height: 40,
            borderColor: '#d4abae',
            textAlign:'center',
            justifyContent: 'center',
          }, 
          headerTitleContainerInhouse: { 
            borderBottomWidth: 0,
            height: 40,
            borderColor: '#d4abae',
            textAlign:'left',
            justifyContent: 'center',
          }, 
        containerr:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
          },
        text:{
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold'
          },
          row: {
            flex:1,
            padding: 15,
            marginBottom: 5,
            backgroundColor: 'skyblue',
            flexDirection: 'column'
          },
         
    })