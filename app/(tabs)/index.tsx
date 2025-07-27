import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const colaboradores = [
  {
    id: 'cleiton',
    nome: 'Cleiton Assis Pinto',
    idade: '25 anos',
    funcao: 'Auxiliar de cuidador de idosos',
    email: 'cleiton.assis@gmail.com',
  },
  {
    id: 'jair',
    nome: 'Jair Messiano',
    idade: '40 anos',
    funcao: 'Cuidador de idosos sênior',
    email: 'jair.messiano@gmail.com',
  },
  {
    id: 'larissa',
    nome: 'Larissa Taxad',
    idade: '27 anos',
    funcao: 'Auxiliar de vida sênior',
    email: 'larissa.taxad@gmail.com',
  },
];

export default function MenuScreen() {
  const [colaboradorAtivo, setColaboradorAtivo] = useState<string | null>(null);

  const toggleColaborador = (id: string) => {
    setColaboradorAtivo((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../../image/Logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>Grand Club</Text>
        <Text style={styles.logoTexts}>Blue Roma</Text>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        >
          <Image source={require('../../image/carrossel1.png')} style={styles.carouselImage} />
          <Image source={require('../../image/carrossel2.png')} style={styles.carouselImage} />
          <Image source={require('../../image/carrossel3.png')} style={styles.carouselImage} />
        </ScrollView>

        <Text style={styles.title}>QUEM SOMOS?</Text>
        <Text style={styles.description}>
          Grand Club Florença é uma empresa especializada no cuidado e bem-estar de idosos,
           fundada em 14 de março de 2023. Desde sua criação,
            a instituição tem como missão oferecer um ambiente seguro,
             acolhedor e humanizado para a terceira idade, priorizando a qualidade de vida,
              a autonomia e o respeito à individualidade de cada residente.
        </Text>

        <View style={styles.section}>
          <Image source={require('../../image/objetivo.png')} style={styles.icon} />
          <Text style={styles.sectionTitle}>MISSÃO</Text>
          <Text style={styles.sectionText}>
            Oferecer cuidado humanizado e suporte completo às necessidades dos
            idosos, promovendo saúde, alegria e respeito.
          </Text>
        </View>

        <View style={styles.section}>
          <Image source={require('../../image/valor.png')} style={styles.icon} />
          <Text style={styles.sectionTitle}>VALORES</Text>
          <View style={styles.list}>
            <Text style={styles.bullet}>• Respeito à individualidade</Text>
            <Text style={styles.bullet}>• Segurança e conforto</Text>
            <Text style={styles.bullet}>• Humanização e empatia</Text>
            <Text style={styles.bullet}>• Valorização da vida</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Image source={require('../../image/loc.png')} style={styles.icon} />
          <Text style={styles.sectionTitle}>FILOSOFIA</Text>
          <Text style={styles.sectionText}>
            Envelhecer com dignidade, alegria e amor, mantendo os vínculos
            familiares e o cuidado integral.
          </Text>
        </View>

        {/* SEÇÃO DE COLABORADORES */}
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 40 }}>
          <Text style={styles.sectionTitle}>CONHEÇA NOSSOS COLABORADORES</Text>

          {colaboradores.map((colab) => (
            <View key={colab.id} style={{ width: '90%', marginVertical: 6 }}>
              <TouchableOpacity
                style={styles.botaoColaborador}
                onPress={() => toggleColaborador(colab.id)}
              >
                <Text style={styles.botaoTexto}>{colab.nome}</Text>
              </TouchableOpacity>

              {colaboradorAtivo === colab.id && (
                <View style={styles.caixaInfo}>
                  <Text style={styles.infoTexto}>{colab.idade}</Text>
                  <Text style={styles.infoTexto}>{colab.funcao}</Text>
                  <Text style={styles.infoTexto}>{colab.email}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* RODAPÉ */}
        <View style={styles.footerInstitutional}>
          <View style={styles.footerContent}>
            <View style={styles.footerTextBlock}>
              <Text style={styles.footerTitle}>GRAND CLUB{'\n'}BLUE ROMA</Text>

              <Text style={styles.footerLine}>
                <Text style={styles.footerLabel}>Telefone:</Text> (41) 99850-3482
              </Text>

              <Text style={styles.footerLine}>
                <Text style={styles.footerLabel}>Email:</Text> scarpincontabil@gmail.com
              </Text>

              <Text style={styles.footerLine}>
                <Text style={styles.footerLabel}>Endereço:</Text> Rua Luiz Boza, 432 - Butiatuvinha,
                Curitiba - PR, 82400-100
              </Text>
            </View>

            <Image source={require('../../image/Logo.png')} style={styles.footerLogo} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F4ECE1',
  },
  container: {
    backgroundColor: '#F4ECE1',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 10,
  },
  logoText: {
    color: '#800000',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    fontFamily: 'Cinzel', 
  },
  logoTexts: {
    marginTop: 10,
    color: '#800000',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 28,
    fontFamily: 'Cinzel',
  },
  carousel: {
    marginTop: 20,
    width: screenWidth,
    height: 200,
    marginBottom: 24,
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D1D1D',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    fontFamily: 'Cinzel',
    marginTop:20,
    
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4A3E39',
    lineHeight: 22,
    marginHorizontal: 20,
    marginBottom: 30,
    marginTop: 10,
  },
  section: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6D1D1D',
    marginBottom: 8,
    fontFamily: 'Cinzel',
    textAlign: 'center',
    marginTop:30,
  },
  sectionText: {
    fontSize: 16,
    color: '#4A3E39',
    textAlign: 'center',
    lineHeight: 22,
  },
  list: {
    marginTop: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#4A3E39',
    textAlign: 'center',
    marginBottom: 4,
  },
  botaoColaborador: {
    backgroundColor: '#A45C5C',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  caixaInfo: {
    backgroundColor: '#FDF8EB',
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoTexto: {
    fontSize: 14,
    color: '#4A3E39',
    marginBottom: 4,
    textAlign: 'center',
  },
  footerInstitutional: {
    backgroundColor: '#3A1E1E',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footerTextBlock: {
    flex: 1,
  },
  footerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  footerLine: {
    color: 'white',
    fontSize: 13,
    marginBottom: 4,
  },
  footerLabel: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footerLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 12,
    marginTop: 4,
  },
});
