import { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/themed-text'; 
import { ThemedView } from '@/components/themed-view'; 

const palavras = [
  "cachorro", "gato", "sol", "lua", "estrela",
  "carro", "floresta", "oceano", "fogo", "montanha",
  "chuva", "vento", "cidade", "amor", "vida",
  "tempo", "sonho", "livro", "café", "música",
  "computador", "praia", "flor", "rio", "amizade",
  "trabalho", "paz", "futuro", "história", "esperança",
  "viagem", "jogo", "arte", "cor", "família",
  "saúde", "sabedoria", "natureza", "cultura", "alegria"
].map(p => p.toUpperCase()); 

function escolherPalavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}


const forcaImages = [
  require('@/assets/images/forca/forca-0.png'),
  require('@/assets/images/forca/forca-1.png'),
  require('@/assets/images/forca/forca-2.png'),
  require('@/assets/images/forca/forca-3.png'),
  require('@/assets/images/forca/forca-4.png'),
  require('@/assets/images/forca/forca-5.png'),
  require('@/assets/images/forca/forca-6.png'),
];

export default function JogoDaForca() {
  const [palavraSecreta, setPalavraSecreta] = useState(escolherPalavraAleatoria());
  const [letrasTentadas, setLetrasTentadas] = useState<string[]>([]);
  
  const letrasErradas = letrasTentadas.filter(letra => !palavraSecreta.includes(letra));
  const numeroDeErros = letrasErradas.length;
  
  const jogoGanho = palavraSecreta.split('').every(letra => letrasTentadas.includes(letra));
  const jogoPerdido = numeroDeErros >= 6;
  const jogoAcabou = jogoGanho || jogoPerdido;

  function handleTentativa(letra: string) {
    if (jogoAcabou || letrasTentadas.includes(letra)) {
      return;
    }
    setLetrasTentadas(letrasAtuais => [...letrasAtuais, letra]);
  }

  function reiniciarJogo() {
    setPalavraSecreta(escolherPalavraAleatoria());
    setLetrasTentadas([]);
  }

  const teclado = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  
  return (
    <ThemedView style={styles.gameContainer}>
      
      <View style={styles.statusContainer}>
        {jogoGanho && <ThemedText style={[styles.statusText, styles.statusWin]}>Você Venceu!</ThemedText>}
        {jogoPerdido && <ThemedText style={[styles.statusText, styles.statusLoss]}>Você Perdeu!</ThemedText>}
      </View>

      <Image 
        source={forcaImages[numeroDeErros]} 
        style={styles.forcaImage}
        resizeMode="contain"
      />

      <View style={styles.wordContainer}>
        {palavraSecreta.split('').map((letra, index) => (
          <ThemedText key={index} style={styles.letter}>
            {letrasTentadas.includes(letra) || jogoPerdido ? letra : '_'}
          </ThemedText>
        ))}
      </View>
      
      <View style={styles.guessedLettersContainer}>
          <ThemedText style={styles.guessedText}>Tentadas: {letrasTentadas.join(', ')}</ThemedText>
      </View>

      
      {jogoAcabou ? (
        <View style={styles.restartContainer}>
          <ThemedText style={styles.palavraEra}>A palavra era: {palavraSecreta}</ThemedText>
          <TouchableOpacity onPress={reiniciarJogo} style={styles.restartButton}>
            <Text style={styles.restartButtonText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.keyboard}>
          {teclado.map(letra => (
              <TouchableOpacity 
                key={letra} 
                style={[
                  styles.keyButton, 
                  letrasTentadas.includes(letra) && styles.keyButtonDisabled
                ]}
                onPress={() => handleTentativa(letra)}
                disabled={letrasTentadas.includes(letra)}
              >
                <Text style={styles.keyButtonText}>{letra}</Text>
              </TouchableOpacity>
          ))}
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  statusContainer: {
    height: 30,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusWin: {
    color: 'green',
  },
  statusLoss: {
    color: 'red',
  },
  forcaImage: {
    width: 200,
    height: 250,
  },
  wordContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  letter: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  guessedLettersContainer: {
    marginVertical: 10,
  },
  guessedText: {
    fontSize: 16,
  },
  restartContainer: {
    alignItems: 'center',
  },
  palavraEra: {
    fontSize: 18,
    marginVertical: 10,
  },
  restartButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  keyButton: {
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 5,
  },
  keyButtonDisabled: {
    backgroundColor: '#ccc',
    opacity: 0.5,
  },
  keyButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }
});