import { useState } from 'react';
import { Upload, Link, Loader2, Download, Search, PlayCircle, CheckCircle, Sparkles, Video, Image, FileText, Zap, Brain, Trophy, BookOpen, Volume2 } from 'lucide-react';

export default function LucyGenXDemo() {
  const [uploadMode, setUploadMode] = useState('file');
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [waterRemoved, setWaterRemoved] = useState(0);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('video');

  const demoQuiz = {
    questions: [
      { question: 'Что такое переменная в Python?', options: ['Контейнер для данных', 'Функция', 'Класс', 'Модуль'], correct: 0 },
      { question: 'Какой оператор используется для цикла?', options: ['if', 'for', 'def', 'import'], correct: 1 },
    ]
  };

  const demoFlashcards = [
    { front: 'Python', back: 'Язык программирования высокого уровня', category: 'Основы' },
    { front: 'Variable', back: 'Именованная область памяти для хранения данных', category: 'Переменные' },
    { front: 'Loop', back: 'Конструкция для повторения кода', category: 'Управление' },
    { front: 'Function', back: 'Блок переиспользуемого кода', category: 'Функции' },
  ];

  const handleDemo = () => {
    setIsProcessing(true);
    setProgress(0);
    setWaterRemoved(0);
    setResults(null);
    
    const steps = [
      { progress: 15, step: 'Анализ видео и выделение ключевых моментов...', water: 0 },
      { progress: 30, step: 'Удаление "воды" из контента...', water: 15 },
      { progress: 45, step: 'Генерация PDF-слайдов...', water: 25 },
      { progress: 60, step: 'Создание AI озвучки...', water: 28 },
      { progress: 75, step: 'Сборка нового видео...', water: 30 },
      { progress: 90, step: 'Генерация квиза и флешкарт...', water: 30 },
      { progress: 100, step: 'Готово! 🎉', water: 30 },
    ];

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < steps.length) {
        const step = steps[idx];
        setProgress(step.progress);
        setCurrentStep(step.step);
        setWaterRemoved(step.water);
        
        if (step.progress === 100) {
          setResults({
            newVideoUrl: '/download/final_video.mp4',
            pdfUrl: '/download/course.pdf',
            slides: 8,
            duration: '3:45'
          });
        }
        
        idx++;
      } else {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 1200);
  };

  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 gap-3">
            <Brain className="w-14 h-14 text-yellow-400 animate-pulse" />
            <h1 className="text-7xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              LucyGenX
            </h1>
            <Sparkles className="w-14 h-14 text-purple-400 animate-pulse" />
          </div>
          <p className="text-2xl text-gray-300 font-light mb-2">
            Трансформируем видео в образовательный контент с AI
          </p>
          <p className="text-lg text-yellow-400 font-semibold">
            ✂️ Удаляем до 30% "воды" • 🎬 Создаём новое видео • 🎯 Квизы и флешкарты
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-400" /> Gemini AI</span>
            <span className="flex items-center gap-1"><Video className="w-4 h-4 text-pink-400" /> Video Generation</span>
            <span className="flex items-center gap-1"><Volume2 className="w-4 h-4 text-green-400" /> AI Voice</span>
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-purple-400" /> Interactive</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Upload className="w-8 h-8 text-yellow-400" />
                Загрузка видео
              </h2>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  onClick={() => setUploadMode('file')}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    uploadMode === 'file'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <Upload className="inline mr-2 w-5 h-5" />
                  Файл
                </button>
                <button
                  onClick={() => setUploadMode('url')}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    uploadMode === 'url'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <Link className="inline mr-2 w-5 h-5" />
                  URL
                </button>
              </div>

              {uploadMode === 'file' ? (
                <button
                  onClick={() => setSelectedFile({ name: 'python_tutorial.mp4', size: 45678901 })}
                  className="w-full py-20 border-2 border-dashed border-white/20 rounded-2xl hover:border-yellow-400 hover:bg-white/5 transition-all group"
                >
                  {selectedFile ? (
                    <div>
                      <CheckCircle className="w-20 h-20 mx-auto mb-3 text-green-400" />
                      <p className="font-bold text-2xl text-green-400">{selectedFile.name}</p>
                      <p className="text-gray-400 mt-2">{(selectedFile.size / 1024 / 1024).toFixed(1)} MB</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-20 h-20 mx-auto mb-3 group-hover:text-yellow-400 transition-colors" />
                      <p className="text-2xl font-semibold">Перетащите видео сюда</p>
                      <p className="text-gray-400 mt-2">или нажмите для выбора</p>
                    </div>
                  )}
                </button>
              ) : (
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full py-5 px-6 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg mb-6"
                />
              )}

              <button
                onClick={handleDemo}
                disabled={isProcessing}
                className="w-full py-6 px-8 mt-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600 hover:from-yellow-600 hover:via-orange-600 hover:to-pink-700 disabled:from-gray-700 disabled:to-gray-800 text-white font-black rounded-2xl text-2xl shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transform hover:scale-105 disabled:scale-100 transition-all disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="inline mr-3 w-7 h-7 animate-spin" />
                    Трансформация...
                  </>
                ) : (
                  <>
                    <Sparkles className="inline mr-3 w-7 h-7" />
                    Трансформировать видео
                  </>
                )}
              </button>
            </div>

            {isProcessing && (
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Loader2 className="w-7 h-7 text-yellow-400 animate-spin" />
                    Обработка
                  </h3>
                  <div className="text-right">
                    <div className="text-3xl font-black text-yellow-400">{progress}%</div>
                    <div className="text-sm text-gray-400">завершено</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-gray-300 mb-3">
                    <span>{currentStep}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-red-400">{waterRemoved}%</div>
                    <div className="text-xs text-gray-400 mt-1">Удалено воды</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-green-400">{Math.floor(progress / 12.5)}</div>
                    <div className="text-xs text-gray-400 mt-1">Слайдов создано</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-purple-400">{progress > 60 ? '✓' : '...'}</div>
                    <div className="text-xs text-gray-400 mt-1">Озвучка</div>
                  </div>
                </div>
              </div>
            )}

            {results && (
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 text-green-400" />
                  Результаты трансформации
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                    <Video className="w-8 h-8 text-green-400 mb-2" />
                    <div className="text-xl font-bold">Новое видео</div>
                    <div className="text-sm text-gray-400">Длительность: {results.duration}</div>
                    <button className="mt-3 w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-all">
                      <Download className="inline w-4 h-4 mr-2" />
                      Скачать MP4
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-xl p-4 border border-red-500/30">
                    <FileText className="w-8 h-8 text-red-400 mb-2" />
                    <div className="text-xl font-bold">PDF-слайды</div>
                    <div className="text-sm text-gray-400">{results.slides} слайдов</div>
                    <button className="mt-3 w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all">
                      <Download className="inline w-4 h-4 mr-2" />
                      Скачать PDF
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  {['video', 'quiz', 'flashcards', 'mindmap'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                        activeTab === tab
                          ? 'bg-yellow-500 text-gray-900'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {tab === 'video' && <Video className="inline w-4 h-4 mr-2" />}
                      {tab === 'quiz' && <Trophy className="inline w-4 h-4 mr-2" />}
                      {tab === 'flashcards' && <BookOpen className="inline w-4 h-4 mr-2" />}
                      {tab === 'mindmap' && <Brain className="inline w-4 h-4 mr-2" />}
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  {activeTab === 'video' && (
                    <div className="bg-black/30 rounded-xl p-8 text-center">
                      <PlayCircle className="w-20 h-20 mx-auto mb-4 text-green-400" />
                      <p className="text-lg">Превью нового видео</p>
                      <p className="text-sm text-gray-400 mt-2">С AI озвучкой и инфографикой</p>
                    </div>
                  )}

                  {activeTab === 'quiz' && (
                    <div className="space-y-4">
                      {demoQuiz.questions.map((q, idx) => (
                        <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <p className="font-semibold mb-3">{idx + 1}. {q.question}</p>
                          <div className="space-y-2">
                            {q.options.map((opt, i) => (
                              <button
                                key={i}
                                onClick={() => setQuizAnswers({...quizAnswers, [idx]: i})}
                                className={`w-full text-left py-2 px-4 rounded-lg transition-all ${
                                  quizAnswers[idx] === i
                                    ? i === q.correct
                                      ? 'bg-green-500/20 border border-green-500'
                                      : 'bg-red-500/20 border border-red-500'
                                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'flashcards' && (
                    <div className="max-w-md mx-auto">
                      <div 
                        className="relative h-64 cursor-pointer"
                        onClick={() => setFlipped(!flipped)}
                      >
                        <div className={`absolute inset-0 transition-all duration-500 ${flipped ? 'opacity-0 rotate-y-180' : 'opacity-100'}`}>
                          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                            <div className="text-sm text-purple-200 mb-2">{demoFlashcards[currentCard].category}</div>
                            <div className="text-3xl font-bold">{demoFlashcards[currentCard].front}</div>
                            <div className="text-sm text-purple-200 mt-4">Нажмите для ответа</div>
                          </div>
                        </div>
                        
                        <div className={`absolute inset-0 transition-all duration-500 ${flipped ? 'opacity-100' : 'opacity-0 -rotate-y-180'}`}>
                          <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 flex items-center justify-center text-center shadow-2xl">
                            <div className="text-xl text-gray-900 font-semibold">{demoFlashcards[currentCard].back}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 mt-6">
                        <button
                          onClick={() => {setCurrentCard(Math.max(0, currentCard - 1)); setFlipped(false);}}
                          className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all"
                        >
                          ← Назад
                        </button>
                        <div className="flex-1 text-center py-3">
                          {currentCard + 1} / {demoFlashcards.length}
                        </div>
                        <button
                          onClick={() => {setCurrentCard(Math.min(demoFlashcards.length - 1, currentCard + 1)); setFlipped(false);}}
                          className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all"
                        >
                          Вперёд →
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'mindmap' && (
                    <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                      <div className="text-center">
                        <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                        <p className="text-lg font-semibold mb-2">Интерактивная майндкарта</p>
                        <p className="text-sm text-gray-400">Визуализация всех концепций курса</p>
                        <button className="mt-4 py-2 px-6 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all">
                          Открыть в полном размере
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Что создаёт LucyGenX?
              </h3>
              
              <div className="space-y-3">
                {[
                  { icon: Video, text: 'Новое видео без "воды"', color: 'text-green-400' },
                  { icon: Volume2, text: 'AI озвучка слайдов', color: 'text-blue-400' },
                  { icon: FileText, text: 'PDF-презентация', color: 'text-red-400' },
                  { icon: Trophy, text: 'Интерактивный квиз', color: 'text-yellow-400' },
                  { icon: BookOpen, text: 'Флешкарты (как Quizlet)', color: 'text-purple-400' },
                  { icon: Brain, text: 'Майндкарта концепций', color: 'text-pink-400' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0`} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-2xl rounded-3xl p-6 border border-purple-500/30 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">⚡ Преимущества</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><b>Удаление воды:</b> Сокращение на 30% за счёт AI-анализа</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><b>Новое видео:</b> Не просто анализ - создание нового контента</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><b>Интерактив:</b> Квизы, флешкарты, майндкарты</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><b>Озвучка:</b> AI голос для каждого слайда</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-2xl rounded-3xl p-6 border border-yellow-500/30 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-4xl font-black text-yellow-400">30%</div>
                  <div className="text-xs text-gray-300 mt-1">Удаляем воды</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-green-400">5min</div>
                  <div className="text-xs text-gray-300 mt-1">Обработка</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-purple-400">6</div>
                  <div className="text-xs text-gray-300 mt-1">Форматов</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-pink-400">∞</div>
                  <div className="text-xs text-gray-300 mt-1">Видео</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p className="text-yellow-400 font-bold text-lg mb-2">AI Genesis Hackathon 2025 🏆</p>
          <p>Gemini AI • Qdrant • FFmpeg • Next.js • FastAPI</p>
        </div>
      </div>
    </div>
  );
}