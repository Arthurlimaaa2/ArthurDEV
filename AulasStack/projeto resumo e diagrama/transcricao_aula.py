import speech_recognition as sr
from transformers import pipeline
import matplotlib.pyplot as plt
import networkx as nx
from pydub import AudioSegment
from moviepy.video.io.VideoFileClip import VideoFileClip
import os

# Função para converter áudio para o formato WAV
def converter_para_wav(caminho_arquivo):
    if caminho_arquivo.endswith(".mp3"):
        audio = AudioSegment.from_mp3(caminho_arquivo)
    elif caminho_arquivo.endswith(".ogg"):
        audio = AudioSegment.from_ogg(caminho_arquivo)
    elif caminho_arquivo.endswith(".wav"):
        return caminho_arquivo  # Já está no formato WAV
    else:
        raise ValueError("Formato de áudio não suportado.")

    # Salva o áudio convertido em um arquivo temporário WAV
    caminho_wav = "temp_audio.wav"
    audio.export(caminho_wav, format="wav")
    return caminho_wav

# Função para extrair áudio de um vídeo
def extrair_audio_de_video(caminho_video):
    video = VideoFileClip(caminho_video)
    caminho_wav = "temp_audio.wav"
    video.audio.write_audiofile(caminho_wav)
    return caminho_wav

# Função para transcrever áudio
def transcrever_audio(caminho_audio):
    recognizer = sr.Recognizer()
    with sr.AudioFile(caminho_audio) as source:
        audio = recognizer.record(source)
    try:
        texto = recognizer.recognize_google(audio, language="pt-BR")
        return texto
    except sr.UnknownValueError:
        return "Não foi possível entender o áudio."
    except sr.RequestError:
        return "Erro ao solicitar resultados do serviço de reconhecimento de fala."

# Função para carregar um arquivo de texto já transcrito
def carregar_transcricao(caminho_texto):
    with open(caminho_texto, "r", encoding="utf-8") as arquivo:
        texto = arquivo.read()
    return texto

# Função para gerar resumo
def resumir_texto(texto):
    summarizer = pipeline("summarization", model="t5-small", tokenizer="t5-small", framework="pt")
    resumo = summarizer(texto, max_length=130, min_length=30, do_sample=False)
    return resumo[0]['summary_text']

# Função para extrair exemplos (trechos importantes)
def extrair_exemplos(texto):
    frases = texto.split('. ')
    exemplos = frases[:3]  # Pegar as 3 primeiras frases como exemplo
    return exemplos

# Função para criar diagrama simples
def criar_diagrama(topicos):
    G = nx.DiGraph()
    for i, topico in enumerate(topicos):
        G.add_node(i, label=topico)
        if i > 0:
            G.add_edge(i-1, i)
    pos = nx.spring_layout(G)
    labels = nx.get_node_attributes(G, 'label')
    nx.draw(G, pos, with_labels=True, labels=labels, node_size=3000, node_color="lightblue", font_size=10, font_weight="bold")
    plt.show()

# Função principal
def main():
    print("Escolha uma opção:")
    print("1. Transcrever áudio ou vídeo")
    print("2. Usar arquivo de texto já transcrito")
    opcao = input("Digite o número da opção desejada: ")

    if opcao == "1":
        caminho_arquivo = input("Digite o caminho do arquivo de áudio ou vídeo: ")
        if caminho_arquivo.endswith((".mp3", ".wav", ".ogg")):
            caminho_wav = converter_para_wav(caminho_arquivo)
        elif caminho_arquivo.endswith((".mp4", ".avi", ".mkv")):
            caminho_wav = extrair_audio_de_video(caminho_arquivo)
        else:
            print("Formato de arquivo não suportado.")
            return

        texto = transcrever_audio(caminho_wav)
        # Remove o arquivo temporário WAV após a transcrição
        if os.path.exists(caminho_wav):
            os.remove(caminho_wav)
    elif opcao == "2":
        caminho_texto = input("Digite o caminho do arquivo de texto (.txt): ")
        texto = carregar_transcricao(caminho_texto)
    else:
        print("Opção inválida.")
        return

    print("\nTexto transcrito ou carregado:\n", texto)

    # Gerar resumo
    resumo = resumir_texto(texto)
    print("\nResumo:\n", resumo)

    # Extrair exemplos
    exemplos = extrair_exemplos(texto)
    print("\nExemplos:\n", exemplos)

    # Criar diagrama
    topicos = ["Introdução", "Desenvolvimento", "Conclusão"]  # Exemplo de tópicos
    criar_diagrama(topicos)

# Executar o programa
if __name__ == "__main__":
    main()