import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() 
{
  return (
    <View style={styles.container}>
      <Image 
      source={require('./senai-laranja.png')}
      style={{ width: 200, height: 100 }}
      resizeMode="contain"
      />
      <Text style={styles.text}>Teste pomonai</Text>
      <View style={styles.actions}></View>      
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: '#021123',
    gap: 40, 
  },
  logo: 
  {
    width: 200,   // Defina uma largura
    height: 100,  // Defina uma altura
    marginBottom: 20,
  },
  text: 
  {
    color: '#ffffff' // Adicionado para manter visível no fundo escuro
  },
  actions: 
  {
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: "80%",
    borderRadius: 32,
    borderWidth: 32,
    borderWidth: 2,
    borderColor: '#144480'
  }
  
});

  
  

  