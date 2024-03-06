
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', gap: 5, padding: 15 }}>
          <Image style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 15,
            resizeMode: "cover",
            backgroundColor: '#fff'
          }}
            source={require('../my-app/assets/profile.png')}>
          </Image>

          <Pressable style={{ backgroundColor: "#10BC4C", padding: 10, borderRadius: 30, marginRight: 3 }}>
            <Text style={{ fontSize: 15, color: "white" }}>Tudo</Text>
          </Pressable>

          <Pressable style={{ backgroundColor: "#282828", padding: 10, borderRadius: 30, marginRight: 3 }}>
            <Text style={{ fontSize: 15, color: "white", }}>Música</Text>
          </Pressable>

          <Pressable style={{ backgroundColor: "#282828", padding: 10, borderRadius: 30, marginRight: 3 }}>
            <Text style={{ fontSize: 15, color: "white", }}>Podcast</Text>
          </Pressable>
        </View>
        <View style={{ height: 20 }}></View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Pressable style={{ width: 55, height: 55, justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>Músicas Curtidas</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/flower.jpg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>Aleatorio</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/daily-mix.jpeg')}></Image>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>Daily Mix 1</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/top-50.jpg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>Top 50 - Brasil</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/mega-hiz-mix.jpg')}></Image>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>Mega Hit Mix</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/drake-Views.jpg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>Views</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3
            }}>
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/motomami.jpeg')}></Image>
            </LinearGradient>

            <Text style={{ color: "white", fontSize: 13 }}>MOTOMAMI</Text>
          </Pressable>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
            backgroundColor: "#202020",
            borderRadius: 4,
            elevation: 3
          }}>
            <Image style={{ width: 55, height: 55 }} source={require('../my-app/assets/bin.jpeg')}></Image>
            <View>
              <Text style={{ fontSize: 15, color: "white" }}>BIN</Text>
            </View>
          </View>
        </View>

        <Text style={{ color: "white", fontSize: 23, fontWeight: "bold", marginHorizontal: 10, marginTop: 15 }}>Paradas</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/top-50.jpg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '400', marginTop: 10 }}>Brasil: seu relatório diario das faixas mais tocadas...</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/top-global.jpeg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 10 }}>Mundo: seu relatório diario das faixas mais tocadas...</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/top-brasil.jpeg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 10 }}>Marshmello, Ana Castela, Mc Ryan SP, Henrique...</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/viral-sp.jpeg')} />
            <Text style={{ width: 120, height: 30, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 10 }}>Viral São Paulo BR</Text>
          </View>
        </ScrollView>

        <Text style={{ color: "white", fontSize: 23, fontWeight: "bold", marginHorizontal: 10, marginTop: 15 }}>Tocados recentimente</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
          <View>
            <Image style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 60 }} source={require('../my-app/assets/the-weeknd.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10, marginLeft: 20 }}>The Weeknd</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/jcole.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10 }}>4 Your Eyes Only</Text>
          </View>

          <View>
            <Image style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 60 }} source={require('../my-app/assets/new-jeans.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10, marginLeft: 20 }}>New Jeans</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15 }} source={require('../my-app/assets/your-right.jpeg')} />
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 12, fontWeight: '400', marginTop: 10 }}>Your Right</Text>
          </View>
        </ScrollView>


        <Text style={{ color: "white", fontSize: 23, fontWeight: "bold", marginHorizontal: 10 }}>Seus Programas</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/dev-sem.jpeg')} />
            <Text style={{ width: 120, height: 15, color: '#10BC4C', fontSize: 10, fontWeight: 'bold', marginTop: 10 }}>Negócios e Tecnologia </Text>
            <Text style={{ width: 120, height: 15, color: 'white', fontSize: 10, fontWeight: '500', marginTop: 2 }}>Dev Sem Fronteiras</Text>
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 2 }}>Show • Alura</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/images.jpeg')} />
            <Text style={{ width: 120, height: 15, color: '#10BC4C', fontSize: 10, fontWeight: 'bold', marginTop: 10 }}>Humor</Text>
            <Text style={{ width: 120, height: 15, color: 'white', fontSize: 10, fontWeight: '500', marginTop: 2 }}>Suburb Talks</Text>
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 2 }}>Show • Nick Grajeda</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/ola-gabs.jpeg')} />
            <Text style={{ width: 120, height: 15, color: '#10BC4C', fontSize: 10, fontWeight: 'bold', marginTop: 10 }}>Tecnologia </Text>
            <Text style={{ width: 120, height: 15, color: 'white', fontSize: 10, fontWeight: '500', marginTop: 2 }}>Olá Gabs</Text>
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 2 }}>Show • Gabs Ferreira</Text>
          </View>

          <View>
            <Image style={{ width: 120, height: 120, backgroundColor: 'red', borderRadius: 5, marginEnd: 15, borderRadius: 20 }} source={require('../my-app/assets/estamos-bem.jpeg')} />
            <Text style={{ width: 120, height: 15, color: '#10BC4C', fontSize: 10, fontWeight: 'bold', marginTop: 10 }}>Estilo de vida e saúde</Text>
            <Text style={{ width: 120, height: 15, color: 'white', fontSize: 10, fontWeight: '500', marginTop: 2 }}>Estamos Bem?</Text>
            <Text style={{ width: 120, height: 20, color: 'white', fontSize: 10, fontWeight: '300', marginTop: 2 }}>Show • Estamos Bem?</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    paddingTop: 5

  },
});
