<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="sr_SR">
<context>
    <name>DialogAbout</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="98"/>
        <source>About SimpleScreenRecorder</source>
        <translation>О SimpleScreenRecorder</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="107"/>
        <source>For more information:</source>
        <translation>За више информација:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="108"/>
        <source>The source code of this program can be found at:</source>
        <translation>Изворни код овог програма можете наћи на:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="109"/>
        <source>This program uses:</source>
        <translation>Овај програм користи:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="110"/>
        <source>%1 for the graphical user interface</source>
        <translation>%1 за графички кориснички интерфејс</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="111"/>
        <source>%1 or %2 (depending on your distribution) for video/audio encoding</source>
        <translation>%1 или %2 (у зависности од ваше дистрибуције) за видео/аудио кодирање</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="112"/>
        <source>%1 for hooking system functions for OpenGL recording</source>
        <translation>%1 за спајање системских функција за OpenGL снимање</translation>
    </message>
</context>
<context>
    <name>DialogGLInject</name>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="36"/>
        <source>OpenGL Settings</source>
        <translation>OpenGL подешавања</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="39"/>
        <source>&lt;p&gt;Warning: OpenGL recording works by injecting a library into the program that will be recorded. This library will override some system functions in order to capture the frames before they are displayed on the screen. If you are trying to record a game that tries to detect hacking attempts on the client side, it&apos;s (theoretically) possible that the game will consider this a hack. This might even get you banned, so it&apos;s a good idea to make sure that the program you want to record won&apos;t ban you, *before* you try to record it. You&apos;ve been warned :).&lt;/p&gt;

&lt;p&gt;Another warning: OpenGL recording is experimental, it may not work or even crash the program you are recording. If you are worried about losing program data, make a backup first!&lt;/p&gt;

&lt;p&gt;If you want to record Steam games, &lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;read this first&lt;/a&gt;.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Упозорење: OpenGL снимање ради тако што убаците библиотеку у програм који желите да снимате. Ова библиотека ће модификовати поједине системске функције како би ухватила фрејмове пре приказивања на екран. Ако покушавате да снимате игру, која има антихакерску заштиту на клијентској стани, могуће је (теоретски ) да ће игра ово препознати као хак. Ово може довести до избацивања из игре (бан). Добра идеја би била да се прво уверите да Вас програм неће бановати, *пренего* што започнете са снимањем. Упозорени сте :).&lt;/p&gt;

&lt;p&gt;Још једна важна ствар: OpenGL снимање је експериментално и може довести до престанка рада апликације коју снимате. Ако се плашите да ћете изгубити програмске податке, направите резервну копију!&lt;/p&gt;

&lt;p&gt;Ако желите да снимате Steam игре, &lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt; прво ово прочитајте &lt;/a&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="53"/>
        <source>Choose channel</source>
        <translation>Изаберите канал</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="55"/>
        <source>Channel name:</source>
        <translation>Име канала:</translation>
    </message>
    <message>
        <source>Channel names are used to identify applications. You only need to change this if you want to record multiple applications at the same time.</source>
        <translation type="obsolete">Имена канала које користите да идентификујете апликације. Ово мењате једино ако желите да снимате више апликација истовремено.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="57"/>
        <source>Channel names are used to identify applications. You only need to use this if you want to record multiple applications at the same time.
If you leave this empty, the default name &apos;channel-YOURUSERNAME&apos; will be used.</source>
        <translation>Имена канала које користите да идентификујете апликације. Ово мењате једино ако желите да снимате више апликација истовремено.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="59"/>
        <source>Relax shared memory permissions (insecure)</source>
        <translation>Релаксирајте права приступа дељеној меморији (несигурно)</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="60"/>
        <source>If checked, other users on the same machine will be able to attach to the shared memory that&apos;s used for communication with the OpenGL program.
This means other users can (theoretically) see what you are recording, modify the frames, inject their own frames, or simply disrupt the communication.
This even applies to users that are logged in remotely (ssh). You should only enable this if you need to record a program that runs as a different user.</source>
        <translation>Ако је чекирано, други корисници овог рачунара ће моћи да се прикаче на дељену меморију, која се користи за комуникацију са OpenGL програмом.
То значи, да ће други корисници (теоретски) моћи да виде шта снимате, да промене фрејмове, да убаце њихове фрејмове или просто да Вам прекину комуникацију.
Ово се односи чак и на кориснике који су пријављени на даљину (преко ssh). Чекирајте ово, само ако треба да снимате програм који се покреће код другог корисника.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="75"/>
        <source>Launch application</source>
        <translation>Покрените апликацију</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="77"/>
        <source>Command:</source>
        <translation>Команда:</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="79"/>
        <source>This command will be executed to start the program that should be recorded.</source>
        <translation>Ова команда ће се извршити приликом покретања програма који треба да се снима.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="81"/>
        <source>Working directory:</source>
        <translation>Радни директоријум:</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="83"/>
        <source>The command will be executed in this directory. If you leave this empty, the working directory won&apos;t be changed.</source>
        <translation>Команда ће се извршити у овом директројиму. Ако је оставите празну, радни директоријум ће остати непромењен.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="85"/>
        <source>Launch automatically</source>
        <translation>Покрените аутоматски</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="86"/>
        <source>If checked, the application will be launched automatically once you go to the recording page. If not checked, you have to start it manually.</source>
        <translation>Ако је чекирано, апликација ће се аутоматски покренути, одмах након што одете на страницу за снимање. Ако није чекирано - морате покренути ручно.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="88"/>
        <source>Launch now</source>
        <translation>Покрени одмах</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="109"/>
        <source>Stream settings</source>
        <translation>Подешавања стрима</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="111"/>
        <source>Limit application frame rate</source>
        <translation>Ограничите број фрејмова</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="112"/>
        <source>If checked, the injected library will slow down the application so the frame rate doesn&apos;t become higher than the recording frame rate.
This stops the application from wasting CPU time for frames that won&apos;t be recorded, and sometimes results in smoother video
(this depends on the application).</source>
        <translation>Ако је чекирано, убачена библиотека ће успорити апликацију, број фрејмова неће бити већи од броја фрејмова снимања.
Ово спречава апликацију да беспотребно троши процесорско време на фрејмове који се неће записати, и понекад ће резултовати течнијим снимком.
(зависи од саме апликације).</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="121"/>
        <source>Close</source>
        <translation>Затвори</translation>
    </message>
</context>
<context>
    <name>Logger</name>
    <message>
        <location filename="../AV/FastResampler.cpp" line="124"/>
        <source>Error: Resample ratio is out of range!</source>
        <translation>Грешка: Скалирани однос је ван опсега</translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="128"/>
        <source>Error: Drift ratio is out of range!</source>
        <translation>Грешка: Број дрифтова је изван опсега</translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="158"/>
        <source>Resample ratio is %1 (was %2).</source>
        <translation>Скалирани однос је %1 (био је %2).</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="129"/>
        <source>Warning: Pixel format is not supported (%1 -&gt; %2), using swscale instead. This is not a problem, but performance will be worse.</source>
        <translation>Упозорење: Неподржан формат пиксела(%1 -&gt; %2), уместо тога користи swscale. Ово није проблем, али перформансе ће бити лошије.</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="138"/>
        <location filename="../Benchmark.cpp" line="124"/>
        <location filename="../Benchmark.cpp" line="205"/>
        <source>Error: Can&apos;t get swscale context!</source>
        <comment>Don&apos;t translate &apos;swscale&apos;</comment>
        <translation>Грешка: Не можемо да добијемо swscale садржај!</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="160"/>
        <location filename="../AV/FastScaler.cpp" line="185"/>
        <location filename="../AV/FastScaler.cpp" line="210"/>
        <location filename="../AV/FastScaler.cpp" line="234"/>
        <location filename="../AV/FastScaler.cpp" line="256"/>
        <location filename="../AV/FastScaler.cpp" line="279"/>
        <source>Warning: Memory is not properly aligned for SSE, using fallback converter instead. This is not a problem, but performance will be worse.</source>
        <comment>Don&apos;t translate &apos;fallback&apos;</comment>
        <translation>Упозорење: Меморија није правилно поравната за SSE, користи резервни конвертер. Ово није проблем, али перформансе ће бити лошије.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="33"/>
        <source>Warning: An overrun has occurred, some samples were lost.</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation>Упозорење: Дошло је до overrun (прекорачења), неки узорци су изгубљени.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="35"/>
        <source>Error: Can&apos;t recover device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation>Грешка: Не можемо да опоравимо уређај после overrun (прекорачења)!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="39"/>
        <source>Error: Can&apos;t start PCM device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation>Грешка: Не можемо да покренемо PCM после overrun (прекорачења)!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="67"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="64"/>
        <location filename="../AV/Input/JACKInput.cpp" line="55"/>
        <location filename="../AV/Input/X11Input.cpp" line="218"/>
        <source>Stopping input thread ...</source>
        <translation>Заустављање улазне нити...</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="97"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="237"/>
        <source>Generating source list ...</source>
        <translation>Генерисање изворне листе...</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="116"/>
        <source>Error: Could not update ALSA configuration!</source>
        <translation>Грешка: Не можемо да ажурирамо ALSA конфигурацију!</translation>
    </message>
    <message>
        <source>Warning: Could not find PCM plugins.</source>
        <translation type="obsolete">Упозорење: Не можемо да нађемо PCM прикључке(plugins).</translation>
    </message>
    <message>
        <source>Found plugin %1 = %2.</source>
        <translation type="obsolete">Пронађен прикључак (plugin) %1 = %2.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="176"/>
        <source>Warning: Could not open sound card %1.</source>
        <translation>Упозорење: Не можемо да приступимо звучној карти %1 </translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="182"/>
        <source>Warning: Could not get info for sound card %1.</source>
        <translation>Упозорење: Не можемо да добијемо информације о звучној карти %1.</translation>
    </message>
    <message>
        <source>Found card %1 = %2.</source>
        <translation type="obsolete">Пронађена карта %1 = %2.</translation>
    </message>
    <message>
        <source>Found device %1 = %2.</source>
        <translation type="obsolete">Пронађен уређај %1 = %2.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="163"/>
        <source>Found plugin: [%1] %2</source>
        <translation>Пронађен прикључак (plugin): [%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="186"/>
        <source>Found card: [%1] %2</source>
        <translation>Пронађена карта: [%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="211"/>
        <source>Found device: [%1] %2</source>
        <translation>Пронађен уређај: [%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="260"/>
        <location filename="../AV/SimpleSynth.cpp" line="124"/>
        <source>Error: Can&apos;t open PCM device!</source>
        <translation>Грешка: Не можемо да приступимо PCM уређају !</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="264"/>
        <location filename="../AV/SimpleSynth.cpp" line="128"/>
        <source>Error: Can&apos;t get PCM hardware parameters!</source>
        <translation>Грешка: Не можемо да добијемо PCМ хардверске параметре!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="270"/>
        <location filename="../AV/SimpleSynth.cpp" line="134"/>
        <source>Error: Can&apos;t set access type!</source>
        <translation>Грешка: Не можемо да задамо приступни тип!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="276"/>
        <location filename="../AV/SimpleSynth.cpp" line="140"/>
        <source>Error: Can&apos;t set sample format!</source>
        <translation>Грешка: Не можемо да задамо тип узорка!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="283"/>
        <location filename="../AV/SimpleSynth.cpp" line="147"/>
        <source>Error: Can&apos;t set sample rate!</source>
        <translation>Грешка: Не можемо да задамо број узорака!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="287"/>
        <location filename="../AV/SimpleSynth.cpp" line="151"/>
        <source>Warning: Sample rate %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation>Упозорење: Број узорака %1 није подржан, уместо њега користи %2. Ово није проблем.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="296"/>
        <location filename="../AV/SimpleSynth.cpp" line="159"/>
        <source>Error: Can&apos;t set channel count!</source>
        <translation>Грешка: Број канала се не може задати!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="300"/>
        <source>Warning: Channel count %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation>Упозорење: Број канала %1 није подржан, уместо њега користити %2. Ово није проблем.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="309"/>
        <location filename="../AV/SimpleSynth.cpp" line="166"/>
        <source>Error: Can&apos;t set period size!</source>
        <translation>Грешка: Дужина периода се не може задати !</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="313"/>
        <location filename="../AV/SimpleSynth.cpp" line="170"/>
        <source>Warning: Period size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation>Упозорење: Дужина периода %1 није подржана, уместо тога користити %2. Ово није проблем.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="322"/>
        <location filename="../AV/SimpleSynth.cpp" line="179"/>
        <source>Error: Can&apos;t set buffer size!</source>
        <translation>Грешка: Не може се задати величина бафера!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="326"/>
        <location filename="../AV/SimpleSynth.cpp" line="183"/>
        <source>Warning: Buffer size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation>Упозорење: Величина бафера неподржана %1, уместо њега користити %2. Ово није проблем.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="334"/>
        <location filename="../AV/SimpleSynth.cpp" line="191"/>
        <source>Error: Can&apos;t apply PCM hardware parameters!</source>
        <translation>Грешка: Не можемо прихватити хардверске параметре РСМ !</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="352"/>
        <source>Error: Can&apos;t start PCM device!</source>
        <translation>Грешка: Не можемо покренути РСМ уређај!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="373"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="181"/>
        <location filename="../AV/Input/JACKInput.cpp" line="237"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="335"/>
        <location filename="../AV/Input/X11Input.cpp" line="428"/>
        <source>Input thread started.</source>
        <translation>Улазна нит покренута.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="388"/>
        <source>Error: Can&apos;t read samples!</source>
        <translation>Грешка: Не можемо да прочитамо узорке!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="414"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="249"/>
        <location filename="../AV/Input/JACKInput.cpp" line="288"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="428"/>
        <location filename="../AV/Input/X11Input.cpp" line="543"/>
        <source>Input thread stopped.</source>
        <translation>Улазна нит заустављена.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="418"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="253"/>
        <location filename="../AV/Input/JACKInput.cpp" line="292"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="432"/>
        <location filename="../AV/Input/X11Input.cpp" line="547"/>
        <source>Exception &apos;%1&apos; in input thread.</source>
        <translation>Изузетак &apos;%1&apos; у улазној нити.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="421"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="256"/>
        <location filename="../AV/Input/JACKInput.cpp" line="295"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="435"/>
        <location filename="../AV/Input/X11Input.cpp" line="550"/>
        <source>Unknown exception in input thread.</source>
        <translation>Непознати изузетак у улазној нити.</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectInput.cpp" line="150"/>
        <source>Error: Could not read stream, this usually means that the stream was already gone.</source>
        <translation>Грешка: Не можемо да прочитамо стрим, ово често значи да је стрим већ завршио своје.</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="71"/>
        <source>Error: Could not connect to JACK!</source>
        <translation>Грешка: Не можемо да се конектујемо на JACK!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="80"/>
        <source>Error: Could not create JACK port!</source>
        <translation>Грешка: Не можемо да креирамо JACK порт!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="86"/>
        <source>Error: Could not set JACK process callback!</source>
        <translation>Грешка: Не можемо да задамо JACK process callback!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="90"/>
        <source>Error: Could not set JACK sample rate callback!</source>
        <translation>Грешка: Не можемо да задамо број узроака JACK callback!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="94"/>
        <source>Error: Could not set JACK xrun callback!</source>
        <translation>Грешка: Не можемо да задамо JACK xrun callback!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="98"/>
        <source>Error: Could not set JACK port connect callback!</source>
        <translation>Грешка: Не можемо да задамо порт за JACK connect callback!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="103"/>
        <source>Error: Could not activate JACK client!</source>
        <translation>Error: Не можемо да активирамо JACK клијента !</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="111"/>
        <location filename="../AV/Input/JACKInput.cpp" line="122"/>
        <location filename="../AV/Input/JACKInput.cpp" line="251"/>
        <source>Connecting port %1 to %2.</source>
        <translation>Конектовање порта %1 на %2.</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="255"/>
        <source>Disconnecting port %1 from %2.</source>
        <translation>Дисконектовање порта %1 од %2.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="34"/>
        <source>Error: pa_mainloop_prepare failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_prepare&apos;</comment>
        <translation>Грешка: pa_mainloop_prepare пао!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="38"/>
        <source>Error: pa_mainloop_poll failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_poll&apos;</comment>
        <translation>Грешка: pa_mainloop_poll пао!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="42"/>
        <source>Error: pa_mainloop_dispatch failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_dispatch&apos;</comment>
        <translation>Грешка: pa_mainloop_dispatch пао!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="52"/>
        <source>Error: Could not create main loop!</source>
        <translation>Грешка: Не можемо да креирамо главну петљу!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="59"/>
        <source>Error: Could not create context!</source>
        <translation>Грешка: Не можемо да креирамо контекст!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="64"/>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio. Try using the ALSA backend instead.</source>
        <translation>Грешка: Не можемо да се конектујемо! Разлог: %1
Могуће је да Ваш систем не користи PulseAudio. Уместо тога пробајте да користите ALSA backend.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="68"/>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio.</source>
        <translation>Грешка: Не можемо да се конектујемо! Разлог: %1
Могуће је да Ваш систем не користи PulseAudio.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="82"/>
        <source>Error: Connection attempt failed! Reason: %1</source>
        <translation>Грешка: Покушај конекције неуспешан! Разлог: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="119"/>
        <source>Error: Could not create stream! Reason: %1</source>
        <translation>Грешка: Не можемо да креирамо стрим! Разлог: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="126"/>
        <source>Error: Could not connect stream! Reason: %1</source>
        <translation>Грешка: Не можемо да се конектујемо на стрим! Разлог: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="137"/>
        <source>Error: Stream connection attempt failed! Reason: %1</source>
        <translation>Грешка: Захтев за стрим конекцијом неуспешан! Разлог: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="228"/>
        <source>Found source: [%1] %2</source>
        <translation>Пронађен извор: [%1] %2</translation>
    </message>
    <message>
        <source>Got %1 = %2.</source>
        <translation type="obsolete">Получи се %1 = %2.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="249"/>
        <source>Error: Could not get names of sources! Reason: %1</source>
        <translation>Грешка: Не можемо да добијемо имена извора! Разлог: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="297"/>
        <source>Error: Could not get source info! Reason: %1</source>
        <translation>Грешка: Не можемо да добијемо информације о извору! Разлог: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="302"/>
        <source>Stream is a monitor.</source>
        <translation>Стрим је монитор.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="304"/>
        <source>Stream is not a monitor.</source>
        <translation>Стрим није монитор.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="349"/>
        <source>Error: pa_stream_peek failed!</source>
        <comment>Don&apos;t translate &apos;pa_stream_peek&apos;</comment>
        <translation>Грешка: pa_stream_peek пао!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="416"/>
        <source>Warning: Audio source was suspended. The current segment will be stopped until the source is resumed.</source>
        <translation>Упозорење: Аудио извор је суспендован. Текући сегмент ће бити заустављен док се извор не поврати.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="421"/>
        <source>Warning: Stream was moved to a different source.</source>
        <translation>Упозорење: Стрим је померен на други извор.</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="64"/>
        <source>Created video stream reader.</source>
        <translation>Креиран видео стрим читач.</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="69"/>
        <source>Error: Can&apos;t open video stream file!</source>
        <translation>Грешка: Не можемо да отворимо видео стрим датотеку ( фајл)!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="76"/>
        <source>Error: Can&apos;t resize video stream file!</source>
        <translation>Грешка: Не можемо да променимо величину видео стрим датотеке ( фајла)!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="83"/>
        <source>Error: Can&apos;t memory-map video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="92"/>
        <source>Error: Can&apos;t open video frame file!</source>
        <translation>Грешка: Не можемо отворити видео фрејм датотеку</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="142"/>
        <source>Destroyed video stream reader.</source>
        <translation>Уништен видео стрим читач.</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="238"/>
        <source>Error: Size of video frame file is incorrect!</source>
        <translation>Грешка: Величина датотеке видео фрејма је нетачна!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="247"/>
        <source>Error: Can&apos;t memory-map video frame file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="94"/>
        <source>Error: Can&apos;t create channel directory!</source>
        <translation>Грешка: Не можемо да креирамо директоријум за канал!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="102"/>
        <source>Error: Can&apos;t stat channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="106"/>
        <source>Error: Channel directory is not a regular directory!</source>
        <translation>Грешка: Директоријум канала није регуларан!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="111"/>
        <source>Error: Can&apos;t set channel directory mode!</source>
        <translation>Грешка: Не можео да задамо режим директоријума канала!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="116"/>
        <source>Error: Channel directory is owned by a different user! Choose a different channel name, or enable relaxed file permissions to use it anyway.</source>
        <translation>Грешка: Директоријум канала је у власништву другог корисника! Изаберите друго име за канал или релаксирајте права приступа датотеци како бисте је користили.</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="126"/>
        <source>Error: Can&apos;t initialize inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation>Грешка: Не можемо да иницијализујемо inotify!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="132"/>
        <source>Error: Can&apos;t watch channel directory!</source>
        <translation>Грешка: Не можемо да погледамо директоријум ( фолдер) канала!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="144"/>
        <source>Error: Can&apos;t open channel directory!</source>
        <translation>Грешка: Не можемо да отворимо директоријум (фолдер) канала!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="162"/>
        <source>Added pre-existing stream %1.</source>
        <translation>Додат претходно постојећи стрим %1.</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="197"/>
        <source>Error: Can&apos;t get read length from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation>Грешка: Не можемо да добијемо дужину читања од inotify!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="205"/>
        <source>Error: Can&apos;t read from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation>Грешка: Не можемо да прочитамо inotify!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="215"/>
        <source>Error: Received partial event from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation>Грешка: Добијен парцијални догађај од inotify!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="227"/>
        <source>Error: Received partial name from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation>Грешка: Добијено парцијално име од inotify!</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="241"/>
        <source>Added stream %1.</source>
        <translation>Стрим %1 је додат.</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="249"/>
        <source>Removed stream %1.</source>
        <translation>Стрим %1 је избрисан .</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="275"/>
        <source>Deleted abandoned stream %1.</source>
        <translation>Избрисан напуштен %1 стрим.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="74"/>
        <source>Error: Unsupported X11 image pixel format!</source>
        <translation>Грешка: Неподржан Х11 формат пиксел слике!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="197"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="96"/>
        <source>Error: Width or height is zero!</source>
        <translation>Грешка: Ширина или висина је нула!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="201"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="100"/>
        <source>Error: Width or height is too large, the maximum width and height is %1!</source>
        <translation>Грешка: Ширина или висина је сувише велика, максимална ширина и висина су %1!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="253"/>
        <location filename="../GUI/HotkeyListener.cpp" line="118"/>
        <source>Error: Can&apos;t open X display!</source>
        <comment>Don&apos;t translate &apos;display&apos;</comment>
        <translation>Грешка: Не можемо да отворимо X екран!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="262"/>
        <source>Using X11 shared memory.</source>
        <translation>Користимо Х11 дељену меморију.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="309"/>
        <source>Error: Can&apos;t create shared image!</source>
        <translation>Грешка: Не може да креирамо дељену слику!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="314"/>
        <source>Error: Can&apos;t get shared memory!</source>
        <translation>Грешка: Не можемо да добијемо дељену меморију!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="319"/>
        <source>Error: Can&apos;t attach to shared memory!</source>
        <translation>Грешка: Не можемо се накачити на дељену меморију!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="264"/>
        <source>Not using X11 shared memory.</source>
        <translation>Не користити Х11 дељену меморију.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="271"/>
        <source>Warning: XFixes is not supported by X server, the cursor has been hidden.</source>
        <comment>Don&apos;t translate &apos;XFixes&apos;</comment>
        <translation>Упозорење: XFixes није подржан од стране X сервера, курсор је сакривен.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="367"/>
        <source>Warning: Xinerama is not supported by X server, multi-monitor support may not work properly.</source>
        <comment>Don&apos;t translate &apos;Xinerama&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="373"/>
        <source>Warning: No monitors detected, multi-monitor support may not work properly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="392"/>
        <source>Error: Invalid screen bounding box!</source>
        <translation>Грешка: Невалидан гранични оквир екрана!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="324"/>
        <source>Error: Can&apos;t attach server to shared memory!</source>
        <translation>Грешка: Не можемо да прикачимо сервер на дељену меморију!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="494"/>
        <source>Error: Can&apos;t get image (using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation>Грешка: Не можемо да добијемо слику ( коришћењем дељене меморије)!
    Ово обично заничи да снимана област није комплетно обухваћена унутар екрана. Или сте можда променули резолуцију?</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="505"/>
        <source>Error: Can&apos;t get image (not using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation>Грешка: Не можемо да добијемо слику ( коришћењем дељене меморије)!
    Ово обично заничи да снимана област није комплетно обухваћена унутар екрана. Или сте можда променули резолуцију?</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="100"/>
        <source>Error: Channel count is zero.</source>
        <translation>Грешка: Број канала је нула.</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="104"/>
        <source>Error: Sample rate is zero.</source>
        <translation>Грешка: Број узрорака је нула.</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="142"/>
        <source>Using sample format %1.</source>
        <translation>Користимо формат узорка %1.</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="147"/>
        <source>Error: Encoder requires an unsupported sample format!</source>
        <translation>Грешка: Кодер захтева неподржан формат узорка!</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="176"/>
        <source>Error: Sending of audio frame failed!</source>
        <translation>Грешка: Неуспешно слање аудио фрејма!</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="197"/>
        <source>Error: Receiving of audio packet failed!</source>
        <translation>Грешка: Неуспешно примање аудио пакета!</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="210"/>
        <location filename="../AV/Output/AudioEncoder.cpp" line="232"/>
        <source>Error: Encoding of audio frame failed!</source>
        <translation>Грешка: Неуспешно кодирање аудио фрејмова!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="30"/>
        <location filename="../AV/Output/BaseEncoder.cpp" line="39"/>
        <source>Error: Option &apos;%1&apos; could not be parsed!</source>
        <translation>Грешка: Опција &apos;%1&apos; се не може парсирати!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="96"/>
        <source>Stopping encoder thread ...</source>
        <translation>Заустављање кодер нити...</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="164"/>
        <source>Error: Can&apos;t open codec!</source>
        <translation>Грешка: Не можемо отворити кодек!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="172"/>
        <source>Warning: Codec option &apos;%1&apos; was not recognised!</source>
        <translation>Упозорење: Опција кодека &apos;%1&apos; није препозната!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="188"/>
        <source>Encoder thread started.</source>
        <translation>Кодер нит је покренута.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="217"/>
        <source>Flushing encoder ...</source>
        <translation>Флашовање кодера ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="228"/>
        <source>Encoder thread stopped.</source>
        <translation>Кодер нит заустављена.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="232"/>
        <source>Exception &apos;%1&apos; in encoder thread.</source>
        <translation>Изузетак &apos;%1&apos; у кодер нити.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="235"/>
        <source>Unknown exception in encoder thread.</source>
        <translation>Непознати изузетак у кодер нити.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="70"/>
        <source>Stopping encoders ...</source>
        <translation>Заустављам кодирање...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="77"/>
        <source>Waiting for muxer thread to stop ...</source>
        <translation>Чекамо да нит мултиплексера заврши ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="100"/>
        <location filename="../AV/Output/Muxer.cpp" line="124"/>
        <source>Error: Can&apos;t copy parameters to stream!</source>
        <translation>Грешка: Не можемо копирати параметре на стриму</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="146"/>
        <source>Error: Can&apos;t write header!</source>
        <comment>Don&apos;t translate &apos;header&apos;</comment>
        <translation>Грешка: Не можемо пистаи header!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="157"/>
        <source>Finishing encoders ...</source>
        <translation>Завршавамо кодирање ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="199"/>
        <source>Error: Can&apos;t find chosen output format!</source>
        <translation>Грешка: Не можемо да нађемо одабрани излазни формат!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="203"/>
        <source>Using format %1 (%2).</source>
        <translation>Користимо формат %1 (%2).</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="209"/>
        <source>Error: Can&apos;t allocate format context!</source>
        <translation>Грешка: Не можемо да алоцирамо формат контекста!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="216"/>
        <source>Error: Can&apos;t open output file!</source>
        <translation>Грешка: Не можемо да отворимо излазну датотеку!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="229"/>
        <source>Error: Can&apos;t write trailer, continuing anyway.</source>
        <comment>Don&apos;t translate &apos;trailer&apos;</comment>
        <translation>Грешка: Не можемо писати trailer, настави у сваком случају.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="267"/>
        <source>Error: Can&apos;t find codec!</source>
        <translation>Грешка: Не можемо да нађемо кодек!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="277"/>
        <source>Using codec %1 (%2).</source>
        <translation>Користимо кодек %1 (%2).</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="288"/>
        <source>Error: Can&apos;t create new stream!</source>
        <translation>Грешка: Не можемо да креирамо нови стрим!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="295"/>
        <source>Error: Can&apos;t create new codec context!</source>
        <translation>Грешка: Не можемо да креирамо нови контекст кодека!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="307"/>
        <source>Error: Can&apos;t get codec context defaults!</source>
        <translation>Грешка: Не можемо да добијемо подразумевани контекст кодека!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="320"/>
        <source>Warning: This codec is considered experimental by libav/ffmpeg.</source>
        <translation>Упозорење: Овај кодек се сматра експерименталним од стране libav/ffmpeg.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="336"/>
        <source>Muxer thread started.</source>
        <translation>Покренута нит мултиплексера.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="396"/>
        <source>Error: Can&apos;t write frame to muxer!</source>
        <translation>Грешка: Не можемо да упишемо фрејм у мултиплексер!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="424"/>
        <source>Muxer thread stopped.</source>
        <translation>Заустављен нит мултиплексера.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="428"/>
        <source>Exception &apos;%1&apos; in muxer thread.</source>
        <translation>Изузетак &apos;%1&apos; у нити мултиплексера!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="431"/>
        <source>Unknown exception in muxer thread.</source>
        <translation>Непознат изузетак у нити мултплексера.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="220"/>
        <source>Stopping synchronizer thread ...</source>
        <translation>Заустављање синхронизатора нити ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="328"/>
        <source>Warning: Received video frame with non-monotonic timestamp.</source>
        <translation>Упозорење: Примљен видео фрејм са немонотонским временским одсечком.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="355"/>
        <source>Warning: Video buffer overflow, some frames will be lost. The audio input seems to be too slow.</source>
        <translation>Упозорење: Видео бафер је препун, неки фрејмови ће бити изгубљени. Изгледа да је аудио улаз сувише спор.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="412"/>
        <source>Warning: Received audio samples with non-monotonic timestamp.</source>
        <translation>Упозорење: Примљени аудио узорци са немонотонским временским одсечком</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="437"/>
        <source>Warning: Too many audio samples, dropping samples to keep the audio in sync with the video.</source>
        <translation>Упозорење: Превише аудио узорака, одбацујемо узорке како бисмо очували синхронизацију звука са видеом.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="443"/>
        <source>Warning: Not enough audio samples, inserting silence to keep the audio in sync with the video.</source>
        <translation>Упозорење: Немамо довољно аудио узорака, додајемо тишину како бисмо очували синхронизацију звука са видеом.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="509"/>
        <source>Warning: Audio input is more than 2% too slow!</source>
        <translation>Упозорење: Аудио улаз је више од 2% пута спорији!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="513"/>
        <source>Warning: Audio input is more than 2% too fast!</source>
        <translation>Упозорење: Аудио улаз је више од 2% пута бржи!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="548"/>
        <source>Warning: Audio buffer overflow, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost). The video input seems to be too slow.</source>
        <translation>Упозорење: Аудио бафер је препун, покретање новог сегмента како бисмо очували синхронизацију звука са видеом ( неки видеи и/или аудио снимци ће бити изгубљени). Изгледа да је видео улаз сувише спор.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="584"/>
        <source>Warning: Received hole in audio stream, inserting silence to keep the audio in sync with the video.</source>
        <translation>Упозорење: Примљена руна у аудио стриму, додајемо тишину како бисмо очували синхронизацију видеа.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="885"/>
        <source>Synchronizer thread started.</source>
        <translation>Нит синхронизатора покренута.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="907"/>
        <source>Synchronizer thread stopped.</source>
        <translation>Нит синхронизатора заустављена.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="911"/>
        <source>Exception &apos;%1&apos; in synchronizer thread.</source>
        <translation>Изузетак &apos;%1&apos; у нити синхронизатора.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="914"/>
        <source>Unknown exception in synchronizer thread.</source>
        <translation>Непознат изузетак у нити синхронизатора</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="104"/>
        <source>Error: Width or height is not an even number!</source>
        <translation>Грешка: Ширина или висина нису парни бројеви!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="108"/>
        <source>Error: Frame rate is zero!</source>
        <translation>Грешка: Број фрејмова је нула!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="165"/>
        <source>Using pixel format %1.</source>
        <translation>Коришћен формат пиксела %1.</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="179"/>
        <source>Error: The pixel format is not supported by the codec!</source>
        <translation>Грешка: Формат пиксела није подржан од стране кодека!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="207"/>
        <source>Error: Sending of video frame failed!</source>
        <translation>Грешка: Неуспешно слање видео фрејма!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="228"/>
        <source>Error: Receiving of video packet failed!</source>
        <translation>Грешка: Неуспешно примање видео пакета!</translation>
    </message>
    <message>
        <source>Error: Encoder requires an unsupported pixel format!</source>
        <translation type="obsolete">Грешка: Кодер захтева неподржан формат пиксела!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="241"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="262"/>
        <source>Error: Encoding of video frame failed!</source>
        <translation>Грешка: Неуспешно кодирање видео фрејма!</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="41"/>
        <source>Using real-time priority.</source>
        <translation>Користимо *real-time* приоритет.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="51"/>
        <source>Using nice priority.</source>
        <comment>Don&apos;t translate &apos;nice&apos;, it&apos;s a UNIX parameter that defines the priority of a process.</comment>
        <translation>Користимо приоритет *nice*.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="56"/>
        <source>Warning: Can&apos;t increase the thread priority.</source>
        <translation>Упозорење: Не можемо повећати приоритет нити.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="64"/>
        <source>Error: Can&apos;t recover device after underrun!</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation>Грешка: Не можемо да опоравимо уређај после underrun</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="91"/>
        <source>Stopping synth thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="224"/>
        <source>Synth thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="277"/>
        <source>Error: Can&apos;t write samples!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="285"/>
        <source>Synth thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="289"/>
        <source>Exception &apos;%1&apos; in synth thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="292"/>
        <source>Unknown exception in synth thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../common/CPUFeatures.cpp" line="45"/>
        <source>CPU features</source>
        <translation>Функционалности процесора</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="161"/>
        <source>The application could not be launched.</source>
        <translation>Не можемо да покренемо апликацију.</translation>
    </message>
    <message>
        <location filename="../GUI/HotkeyListener.cpp" line="164"/>
        <source>Warning: XInput2 is not supported by X server, hotkeys may not work in some applications.</source>
        <comment>Don&apos;t translate &apos;XInput2&apos;</comment>
        <translation>Упозорење: XInput2 није подржан од стране X сервера, брзи тастери можда неће радити у неким апликацијама.</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="124"/>
        <source>Error: Command-line option &apos;%1&apos; does not take a value!</source>
        <translation>Грешка: Опција команде линије &apos;%1&apos; не узима вредност!</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="158"/>
        <source>Error: Unknown command-line option &apos;%1&apos;!</source>
        <translation>Грешка: Непозната опција командне линије - &apos;%1&apos;!</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="168"/>
        <source>Error: Unknown command-line argument &apos;%1&apos;!</source>
        <translation>Грешка: Непознат аргумент команде линије - &apos;%1&apos;!</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="208"/>
        <source>SSR started</source>
        <translation>SSR је покренут</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="239"/>
        <source>SSR stopped</source>
        <translation>SSR је заустављен</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="256"/>
        <source>Error: Can&apos;t create .ssr directory!</source>
        <translation>Грешка: Не можемо да креирамо .ssr директоријум!</translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="165"/>
        <source>BGRA %1 to BGRA %2  |  SWScale %3 us  |  Fallback %4 us (%5%)  |  SSSE3 %6 us (%7%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="243"/>
        <source>%1 %2 to %3 %4  |  SWScale %5 us  |  Fallback %6 us (%7%)  |  SSSE3 %8 us (%9%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="253"/>
        <source>Starting scaler benchmark ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="260"/>
        <source>Starting converter benchmark ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="70"/>
        <source>Stopping fragment thread ...</source>
        <translation>Заустављање фрагмента нити ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="346"/>
        <source>Fragment thread started.</source>
        <translation>Фрагмент нити покренут.</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="364"/>
        <source>Next fragment ...</source>
        <translation>Следећи фрагмент ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="368"/>
        <source>Finishing ...</source>
        <translation>Завршавамо ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="380"/>
        <source>Fragment thread stopped.</source>
        <translation>Фрагмент нити заустављен.</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="384"/>
        <source>Exception &apos;%1&apos; in fragment thread.</source>
        <translation>Изузетак &apos;%1&apos; у фрагменту нити</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="387"/>
        <source>Unknown exception in fragment thread.</source>
        <translation>Непознати изузетак у фрагменту нити.</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../GUI/MainWindow.cpp" line="75"/>
        <source>SimpleScreenRecorder has detected that you are using the proprietary NVIDIA driver with flipping enabled. This is known to cause glitches during recording. It is recommended to disable flipping. Do you want me to do this for you?

You can also change this option manually in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation>SimpleScreenRecorder је детектовао да користите власнички NVIDIA драјвер са укљученим flipping. Познато је да ово изазива гличеве у току снимања. Препоручено је да се искључи flipping. Да ли желите да ми то урадимо за Вас?

Ова опција се може променити и ручно у  NVIDIA control panel.</translation>
    </message>
    <message>
        <location filename="../GUI/MainWindow.cpp" line="93"/>
        <source>I couldn&apos;t disable flipping for some reason - sorry! Try disabling it in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation>Из неког разлога нисмо успели да угасимо flipping - извињавамо се! Пробајте да га угасите у NVIDIA control panel.</translation>
    </message>
</context>
<context>
    <name>PageDone</name>
    <message>
        <location filename="../GUI/PageDone.cpp" line="30"/>
        <source>The recording has been saved. You can edit the video now, or re-encode it with better settings to make the file smaller (the default settings are optimized for quality and speed, not file size).</source>
        <translation>Снимање је сачувано. Сада можете да модификујете видео или да га прекодирате са бољим подешавањима да бисте га смањили (стандардна подешавања су оптимизована за квалитет и брзину, али не и за величину датотеке).</translation>
    </message>
    <message>
        <location filename="../GUI/PageDone.cpp" line="33"/>
        <source>Back to the start screen</source>
        <translation>Врати се на почетни екран</translation>
    </message>
</context>
<context>
    <name>PageInput</name>
    <message>
        <location filename="../GUI/PageInput.cpp" line="240"/>
        <source>Video input</source>
        <translation>Видео улаз</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="243"/>
        <source>Record the entire screen</source>
        <translation>Снимање целог екрана</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="244"/>
        <source>Record a fixed rectangle</source>
        <translation>Снимање фиксне правоугаоне области</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="245"/>
        <source>Follow the cursor</source>
        <translation>Прати курсор</translation>
    </message>
    <message>
        <source>Record OpenGL (experimental)</source>
        <translation type="obsolete">Снимање OpenGL (експериментално)</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="238"/>
        <source>Input profile</source>
        <translation>Улазни профил</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="247"/>
        <source>Record OpenGL</source>
        <translation>OpenGL снимање</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="256"/>
        <source>Select what monitor should be recorded in a multi-monitor configuration.</source>
        <translation>Изаберите монитор који желите да снимате у мултимониторској конфигурацији.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="257"/>
        <source>Record entire screen with cursor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="258"/>
        <source>Record the entire screen on which the cursor is located, rather than following the cursor position.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="259"/>
        <source>Select rectangle...</source>
        <translation>Изберите правоугаону област...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="260"/>
        <source>Use the mouse to select the recorded rectangle.</source>
        <translation>Употребите миш како бисте изабрали правоугаону област за снимање.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="261"/>
        <source>Select window...</source>
        <translation>Изаберите прозор...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="262"/>
        <source>Use the mouse to select a window to record.
Hint: If you click the border of a window, the entire window will be recorded (including the borders). Otherwise only
the client area of the window will be recorded.</source>
        <translation>Користите миш како бисте одабрали прозор за снимање екрана.
Савет: Ако кликнете на руб прозора, цели прозор ће бити сниман (укључујући и рубове). Иначе ће снимати
клиентскu област прозора.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="266"/>
        <source>OpenGL settings...</source>
        <translation>OpenGL подешавања...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="267"/>
        <source>Change the settings for OpenGL recording.</source>
        <translation>Промена подешавања за OpenGL снимање.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="269"/>
        <source>Left:</source>
        <translation>Лево:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="273"/>
        <source>The x coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>Координата x на горњем левом углу снимане правоугаоне области.
Савет: Можете да промените вредност х координате скрол точкићем или стрелицама горе/доле.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="275"/>
        <source>Top:</source>
        <translation>Горе:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="279"/>
        <source>The y coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>Координата y на горњем левом углу снимане правоугаоне области.
Савет: Можете да промените вредност y координате скрол точкићем или стрелицама горе/доле.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="281"/>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="285"/>
        <source>The width of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>Ширина снимане правоугаоне области.
Савет: Можете да промените ширину скрол точкићем или стрелицама горе/доле.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="287"/>
        <source>Height:</source>
        <translation>Висина:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="291"/>
        <source>The height of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>Висина снимане правоугаоне области.
Савет: Можете да промените висину скрол точкићем или стрелицама горе/доле.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="293"/>
        <source>Frame rate:</source>
        <translation>Број фрејмова:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="297"/>
        <source>The number of frames per second in the final video. Higher frame rates use more CPU time.</source>
        <translation>Број фрејмова у секунди у крајњем видеу. Већи број фрејмова захтева више процесорског времена.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="298"/>
        <source>Scale video</source>
        <translation>Скалирај видео</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="299"/>
        <source>Enable or disable scaling. Scaling uses more CPU time, but if the scaled video is smaller, it could make the encoding faster.</source>
        <translation>Омогући или онемогући скалирање. Скалирање захтева више процесорског времена, ако је скалирани видео мали, може да убрза кодирање.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="300"/>
        <source>Scaled width:</source>
        <translation>Скалирана ширина:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="304"/>
        <source>Scaled height:</source>
        <translation>Скалирана висина:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="308"/>
        <source>Record cursor</source>
        <translation>Снимање курсора</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="390"/>
        <source>Audio input</source>
        <translation>Аудио улаз</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="392"/>
        <source>Record audio</source>
        <translation>Снимање звука</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="393"/>
        <source>Backend:</source>
        <translatorcomment>There&apos;s no real translation for &quot;backend&quot; in german, so i changed it to &quot;Audio-System&quot;. Because &quot;backend&quot; in german means &quot;baking&quot; in english. :-)</translatorcomment>
        <translation>Бекенд:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="405"/>
        <source>The audio backend that will be used for recording.
The ALSA backend will also work on systems that use PulseAudio, but it is better to use the PulseAudio backend directly.</source>
        <translation>Аудио систем који ће се користити за снимање.
ALSA Бекенд ће такође радити и на системима који користе PulseAudio, али је ипак боље да се директно користи PulseAudio Бекенд.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="408"/>
        <source>The audio backend that will be used for recording.</source>
        <translation>Аудио бекенд који ће се користити за снимање.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="411"/>
        <location filename="../GUI/PageInput.cpp" line="420"/>
        <source>Source:</source>
        <translation>Извор:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="414"/>
        <source>The ALSA source that will be used for recording.
The default is usually fine. The &apos;shared&apos; sources allow multiple programs to record at the same time, but they may be less reliable.</source>
        <translatorcomment>ALSA източникът, който да се използва за запис.
Стандартният избор обикновено е добър. Споделените източници позволяват на множество програми да записват по едно и също време, но ноже да не са така надеждни.</translatorcomment>
        <translation>ALSA извор ће се користити за снимање.
Стандардни извор је углавном добар. Дељени извори нам омогућавају да снимамо више програма истовремено, али могу бити мање поуздани.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="416"/>
        <location filename="../GUI/PageInput.cpp" line="425"/>
        <source>Refresh</source>
        <translation>Освежи</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="417"/>
        <source>Refreshes the list of ALSA sources.</source>
        <translation>Освежи листу ALSA извора.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="423"/>
        <source>The PulseAudio source that will be used for recording.
A &apos;monitor&apos; is a source that records the audio played by other applications.</source>
        <comment>Don&apos;t translate &apos;monitor&apos; unless PulseAudio does this as well</comment>
        <translation>PulseAudio извор ће се користити за снимање.
&apos;monitor&apos; је извор, снимач звука, репродукован од стране других апликација.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="426"/>
        <source>Refreshes the list of PulseAudio sources.</source>
        <translation>Освежи листу PulseAudio извора.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="429"/>
        <source>Record system microphone</source>
        <translation>Систем снимања микрофоном</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="430"/>
        <source>If checked, the ports will be automatically connected to the system capture ports.</source>
        <translation>Ако је чекирано, портови ће се аутоматски конектовати на систем за заузимање портова.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="431"/>
        <source>Record system speakers</source>
        <translation>Систем снимања звучника</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="432"/>
        <source>If checked, the ports will be automatically connected to anything that connects to the system playback ports.</source>
        <translation>Ако је чекирано, портови ће се аутоматски конектовати на било шта што се конектује на плејбек портове</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="479"/>
        <source>Back</source>
        <translation>Назад</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="480"/>
        <source>Continue</source>
        <translation>Настави</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="905"/>
        <source>All screens: %1x%2</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>Сви екрани: %1x%2</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="909"/>
        <source>Screen %1: %2x%3 at %4,%5</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>Екран %1: %2x%3 на %4,%5</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="1121"/>
        <source>Screen %1</source>
        <comment>This appears in the screen labels</comment>
        <translation>Екран %1</translation>
    </message>
</context>
<context>
    <name>PageOutput</name>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="83"/>
        <location filename="../GUI/PageOutput.cpp" line="86"/>
        <location filename="../GUI/PageOutput.cpp" line="89"/>
        <location filename="../GUI/PageOutput.cpp" line="92"/>
        <location filename="../GUI/PageOutput.cpp" line="134"/>
        <source>%1 files</source>
        <comment>This appears in the file dialog, e.g. &apos;MP4 files&apos;</comment>
        <translation>%1 Датотека ( фајлаова)</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="95"/>
        <location filename="../GUI/PageOutput.cpp" line="101"/>
        <location filename="../GUI/PageOutput.cpp" line="108"/>
        <source>Other...</source>
        <translation>Друго...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="107"/>
        <source>Uncompressed</source>
        <translation>Без компресије</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="174"/>
        <source>Error: Could not find any suitable container in libavformat!</source>
        <translation>Грешка: Не можемо да нађемо одговарајући контејнер у libavformat!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="178"/>
        <source>Error: Could not find any suitable video codec in libavcodec!</source>
        <translation>Грешка: Не можемо да нађемо одговарајући видео кодек libavcodec!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="182"/>
        <source>Error: Could not find any suitable audio codec in libavcodec!</source>
        <translation>Грешка: Не можемо да нађемо одговарајући аудио кодек libavcodec!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="190"/>
        <source>Output profile</source>
        <translation>Излазни профил</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="192"/>
        <source>File</source>
        <translation>Датотека ( фајл)</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="194"/>
        <source>Save as:</source>
        <translation>Сачувај као:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="196"/>
        <source>The recording will be saved to this location.</source>
        <translation>Снимак ће бити сачуван на овој локацији.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="197"/>
        <source>Browse...</source>
        <translation>Претражи ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="198"/>
        <source>Separate file per segment</source>
        <translation>Подели датотеку по сегментима</translation>
    </message>
    <message>
        <source>If checked, a separate video file will be created every time you pause and resume the recording.
If the original file name is &apos;test.mkv&apos;, the segments will be saved as &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.</source>
        <translation type="obsolete">Ако је чекирано, одвојени видео снимак ће се креирати сваки пут када притиснете паузу и наставите са снимањем.
Ако је оригинално име датотеке &apos;test.mkv&apos;, сегменти ће бити сачувани као &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="204"/>
        <source>Container:</source>
        <translation>Контејнер:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="209"/>
        <source>(not installed)</source>
        <translation>(није инсталиран)</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="212"/>
        <source>The container (file format) that will be used to save the recording.
Note that not all codecs are supported by all containers, and that not all media players can read all file formats.
- Matroska (MKV) supports all the codecs, but is less well-known.
- MP4 is the most well-known format and will play on almost any modern media player, but supports only H.264 video
   (and many media players only support AAC audio).
- WebM is intended for embedding video into websites (with the HTML5 &lt;video&gt; tag). The format was created by Google.
   WebM is supported by default in Firefox, Chrome and Opera, and plugins are available for Internet Explorer and Safari.
   It supports only VP8 and Vorbis.
- OGG supports only Theora and Vorbis.</source>
        <translation>Контејнер (формат датотеке), који ће се користити за чување снимака.
Обратите пажњу да нису сви кодеци подржани од стране свих контејнера, и да немогу сви медија плејери да учитају све формате датотека. 
- Matroska (MKV) подржава све кодеке, али је мање познат.
- MP4 је најпознатији формат и може се репродуковати на скоро сваком модерном медија плејеру, али подржава једино H.264 видео
   (и многи медија плејери подржавају једино AAC звук).
- WebM је намењен за уградњу видеа у веб сајтове (са HTML5 tag-ом &lt;video&gt;). Креиран је од стране Google.
   WebM је стандардно подржан од стране Firefox, Chrome и Opera, а за Internet Explorer и Safari има прикључке( pluginove).
   Ово подржава само VP8 и Vorbis.
- OGG подржава само Theora и Vorbis.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="221"/>
        <source>Container name:</source>
        <translation>Име контејнера:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="227"/>
        <source>For advanced users. You can use any libav/ffmpeg format, but many of them are not useful or may not work.</source>
        <translation>За напредне кориснике. Можете користити било који libav/ffmpeg видео кодек, али многи од њих Вам неће користити или неће радити.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="248"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="250"/>
        <location filename="../GUI/PageOutput.cpp" line="330"/>
        <source>Codec:</source>
        <translation>Кодек:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="255"/>
        <source>The codec that will be used to compress the video stream.
- H.264 (libx264) is by far the best codec - high quality and very fast.
- VP8 (libvpx) is quite good but also quite slow.
- Theora (libtheora) isn&apos;t really recommended because the quality isn&apos;t very good.</source>
        <translation>Кодек који ће бити коришћен за компресовање видео стрима.
- H.264 (libx264) је далеко најбољи кодек - висок квалитет и веома брз.
- VP8 (libvpx) је доста добар, али помало спор.
- Theora (libtheora) није препоручљив због лошег квалитета</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="259"/>
        <location filename="../GUI/PageOutput.cpp" line="343"/>
        <source>Codec name:</source>
        <translation>Име кодека:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="265"/>
        <source>For advanced users. You can use any libav/ffmpeg video codec, but many of them are not useful or may not work.</source>
        <translation>За напредне кориснике. Можете користити било који libav/ffmpeg видео кодек, али многи од њих Вам неће користити или неће радити.</translation>
    </message>
    <message>
        <source>Bit rate (in kbps):</source>
        <translation type="obsolete">Број бита ( kbps):</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="199"/>
        <source>If checked, a separate video file will be created every time you pause and resume the recording.If unchecked, all recorded segments will be combined into a single video file.</source>
        <translation>Ако је чекиран, засебна видео датотека ће бити креирана сваки пут када паузирате видео и наставите са снимањем.Ако није, сви снимани сегменти ће бити комбиновани у једну видео датотеку.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="201"/>
        <source>Add timestamp</source>
        <translation>Додај временски одсечак</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="202"/>
        <source>If checked, the current date and time will be appended to the file name automatically.
If the original file name is &apos;test.mkv&apos;, the video will be saved as &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.</source>
        <translation>Ако је чекирано, тренутно време и датум ће бити аутоматски накачени у назив датотеке. 
Ако је оригинално име датотеке 	&apos;test.mkv&apos; , видео ће бити сачуван као &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.	</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="266"/>
        <location filename="../GUI/PageOutput.cpp" line="350"/>
        <source>Bit rate (in kbit/s):</source>
        <translation>Број бита (у кбит/с)</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="268"/>
        <source>The video bit rate (in kilobit per second). A higher value means a higher quality.
If you have no idea where to start, try 5000 and change it if needed.</source>
        <translation>Број видео битова  (у килобитима у секунди). Већа вредност значи бољи квалитет.
Ако не знате где да кренете, пробајте са 5000 и промените ако је потребно.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="270"/>
        <source>Constant rate factor:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Constant rate factor:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="275"/>
        <source>This setting changes the video quality. A lower value means a higher quality.
The allowed range is 0-51 (0 means lossless, the default is 23).</source>
        <translation>Ова подешавања мењају квалитет видеа. Мања вредност значи бољи квалитет.
Дозвољени опсег је 0-51 (0 означава без губитака, стандардно је 23).</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="281"/>
        <source>Preset:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Унапред подешено:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="286"/>
        <source>The encoding speed. A higher speed uses less CPU (making higher recording frame rates possible),
but results in larger files. The quality shouldn&apos;t be affected too much.</source>
        <translation>Кодирана брзина. Већа брзина мање експолатише процесор (правећи већи број фрејмова),
али ефекат побољшања квалитета у већим датотекама неће бити толико приметан .</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="288"/>
        <source>CPU used:</source>
        <comment>libvpx setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Коришћени процесор:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="290"/>
        <source>fastest</source>
        <translation>најбрже</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="295"/>
        <source>slowest</source>
        <translation>најспорије</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="296"/>
        <source>The encoding speed. A higher value uses *less* CPU time. (I didn&apos;t choose the name, this is the name
used by the VP8 encoder). Higher values result in lower quality video, unless you increase the bit rate too.</source>
        <translation>Кодирана брзина. Виша вредност користи *мање* процесорског времена.
Више вредности смањују квалитет видеа, осим ако неповећате и број бита.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="298"/>
        <location filename="../GUI/PageOutput.cpp" line="353"/>
        <source>Custom options:</source>
        <translation>Корисничке опције:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="300"/>
        <location filename="../GUI/PageOutput.cpp" line="355"/>
        <source>Custom codec options separated by commas (e.g. option1=value1,option2=value2,option3=value3)</source>
        <translation>Корисничке опције кодека се раздвајају зарезима (нпр. опција1=вредност1,опција2=вредност2,опција3=вредност3)</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="301"/>
        <source>Allow frame skipping</source>
        <translation>Дозволи прескакање фрејмова</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="302"/>
        <source>If checked, the video encoder will be allowed to skip frames if the input frame rate is
lower than the output frame rate. If not checked, input frames will be duplicated to fill the holes.
This increases the file size and CPU usage, but reduces the latency for live streams in some cases.
It shouldn&apos;t affect the appearance of the video.</source>
        <translation>Ако је чекирано, кодеру ће бити омогућено да прескаче фрејмове ако је улазни број фрејмова
мањи од излазног броја фрејмова. Ако није чекирано, улазни фрејмови биће дуплирани како би се попуниле рупе.
Ово повећава величину датотеке и коришћење процесора, али у неким случајевима смањује латенцију приликом лајв стримовања.
Не би требало да утиче на приказ видеа.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="328"/>
        <source>Audio</source>
        <translation>Аудио</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="335"/>
        <source>The codec that will be used to compress the audio stream. You shouldn&apos;t worry too much about
this, because the size of the audio data is usually negligible compared to the size of the video data.
And if you&apos;re only recording your own voice (i.e. no music), the quality won&apos;t matter that much anyway.
- Vorbis (libvorbis) is great, this is the recommended codec.
- MP3 (libmp3lame) is reasonably good.
- AAC is a good codec, but the implementations used here (libvo_aacenc or the experimental ffmpeg aac encoder)
   are pretty bad. Only use it if you have no other choice.
- Uncompressed will simply store the sound data without compressing it. The file will be quite large, but it&apos;s very fast.</source>
        <translation>Кодек који ће се користи за аудио стрим. Ово неби требало много да вас брине, 
зато што је величина аудио података занемарљива у поређењу са видео подацима.
Ако снимате само Ваш глас (нпр. без музике), квалитет свакако није толико битан.
- Vorbis (libvorbis) је веома истакнут и препоручен кодек.
- MP3 (libmp3lame) је доста добар.
- AAC је добар кодек, али имплементација која се користи овде (libvo_aacenc или експерименталния ffmpeg aac)
   је доста лоша. Користите га једино ако немате избора.
- Без компресије, просто ће сачувати податке без компресије. Датотека ће бити позамашно велика али веома брза.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="349"/>
        <source>For advanced users. You can use any libav/ffmpeg audio codec, but many of them are not useful or may not work.</source>
        <translation>За напредније кориснике. Можете да користите било који libav/ffmpeg аудио кодек, али многи од њих Вам неће користити или неће радити.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="352"/>
        <source>The audio bit rate (in kilobit per second). A higher value means a higher quality. The typical value is 128.</source>
        <translation>Број аудио битова ( килобити у секуни). Већа вредност значи бољи квалитет. Типична вредност је 128.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="377"/>
        <source>Back</source>
        <translation>Назад</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="378"/>
        <source>Continue</source>
        <translation>Настави</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="632"/>
        <location filename="../GUI/PageOutput.cpp" line="640"/>
        <source>not installed</source>
        <translation>није инсталиран</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="634"/>
        <location filename="../GUI/PageOutput.cpp" line="642"/>
        <source>not supported by container</source>
        <translation>није подржан од стране контејнера</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="685"/>
        <source>Save recording as</source>
        <translation>Сачувај снимак као</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="526"/>
        <source>You did not select an output file!</source>
        <translation>Нисте изабрали излазну датотеку!</translation>
    </message>
    <message>
        <source>The file &apos;%1&apos; already exists. Are you sure that you want to overwrite it?</source>
        <translation type="obsolete">Датотека ( фајл) &apos;%1&apos; већ постоји. Да ли сте сигурни да желите да га прегазите?</translation>
    </message>
</context>
<context>
    <name>PageRecord</name>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="168"/>
        <source>Recording</source>
        <translation>Снимање</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="172"/>
        <source>Enable recording hotkey</source>
        <translation>Омогући снимање уз помоћ брзих тастера</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="174"/>
        <source>Enable sound notifications</source>
        <translation>Омогући звучне нотификације</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="176"/>
        <source>Hotkey:</source>
        <translation>Брзи тастер:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="177"/>
        <source>Ctrl +</source>
        <translation>Ctrl +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="178"/>
        <source>Shift +</source>
        <translation>Shift +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="179"/>
        <source>Alt +</source>
        <translation>Alt +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="180"/>
        <source>Super +</source>
        <translation>Super +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="182"/>
        <source>The key that you have to press (combined with the given modifiers) to start or pause recording.
The program that you are recording will not receive the key press.</source>
        <translation>Тастер који треба да притиснете (комбинован са датим модификаторима), за покретање или паузирање снимања.
Програм, који снимамо, неће регистровати притиснути тастер.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="226"/>
        <source>Information</source>
        <translation>Информациије</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="228"/>
        <source>Total time:</source>
        <translation>Укупно време:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="230"/>
        <source>FPS in:</source>
        <translation>Улазни FPS:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="232"/>
        <source>FPS out:</source>
        <translation>Излазни FPS:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="234"/>
        <source>Size in:</source>
        <translation>Улазна величина:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="236"/>
        <source>Size out:</source>
        <translation>Излазна величина:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="238"/>
        <source>File name:</source>
        <translation>Назив датотеке(фајла):</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="241"/>
        <source>File size:</source>
        <translation>Величина датотеке(фајла):</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="243"/>
        <source>Bit rate:</source>
        <translation>Број битова:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="266"/>
        <source>Preview</source>
        <translation>Преглед </translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="270"/>
        <source>Preview frame rate:</source>
        <translation>Преглед броја фрејмова:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="274"/>
        <source>Note: Previewing requires extra CPU time (especially at high frame rates).</source>
        <translation>Забележи: Преглед захтева додатно процесорско време ( посебно при високом броју фрејмова).</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="323"/>
        <source>Log</source>
        <translation>Дневник</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="338"/>
        <location filename="../GUI/PageRecord.cpp" line="346"/>
        <source>Cancel recording</source>
        <translation>Откажи снимање</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="339"/>
        <location filename="../GUI/PageRecord.cpp" line="348"/>
        <source>Save recording</source>
        <translation>Сачувај снимање</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="353"/>
        <source>Quit</source>
        <translation>Изађи</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="396"/>
        <source>You have not saved the current recording yet, if you quit now it will be lost.
Are you sure that you want to quit?</source>
        <translation>Нисте сачували тренутни снимак. Ако сад изађете, снимак ће се изгубити.
Да ли сте сигурни да желите да изађете?</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="408"/>
        <source>Hide window</source>
        <translation>Сакри прозор</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="410"/>
        <source>Show window</source>
        <translation>Прикажи прозор</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="593"/>
        <source>Starting page ...</source>
        <translation>Покретање странице</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="616"/>
        <location filename="../GUI/PageRecord.cpp" line="774"/>
        <location filename="../GUI/PageRecord.cpp" line="870"/>
        <source>Error: Something went wrong during initialization.</source>
        <translation>Грешка: Нешто се десило приликом иницијализације.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="625"/>
        <source>Started page.</source>
        <translatorcomment>Where does this appear?</translatorcomment>
        <translation>Покренута страница.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="651"/>
        <source>Stopping page ...</source>
        <translatorcomment>Where does this appear? Log only?</translatorcomment>
        <translation>Заустављање странице ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="925"/>
        <source>Encoding remaining data ...</source>
        <translation>Кодирање преосталих података ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="678"/>
        <source>Stopped page.</source>
        <translatorcomment>Where does this appear?</translatorcomment>
        <translation>Заустављена страница.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="706"/>
        <source>Starting output ...</source>
        <translation>Покретање излаза...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="721"/>
        <source>Error: Could not get the size of the OpenGL application because the GLInject input has not been created.</source>
        <translation>Грешка: Не можемо да добијемо величину OpenGL апликације, зато што улаз GLInject није креиран.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="726"/>
        <source>Error: Could not get the size of the OpenGL application. Either the application wasn&apos;t started correctly, or the application hasn&apos;t created an OpenGL window yet. If you want to start recording before starting the application, you have to enable scaling and enter the video size manually.</source>
        <translation>Грешка: Не можемо да добијемо величину OpenGL апликације. Или апликација није добро покренута или апликација још увек није креирала OpenGL прозор. Ако желите да снимате пре покретања апликације, треба да омогућите скалирање и ручно унесете резолуцију видеа.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="765"/>
        <source>Started output.</source>
        <translation>Покренут излаз.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="785"/>
        <source>Stopping output ...</source>
        <translation>Заустављање излаза...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="803"/>
        <source>Stopped output.</source>
        <translation>Заустављен излаз.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="834"/>
        <source>Starting input ...</source>
        <translation>Покретање улаза...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="840"/>
        <source>Error: Could not start the GLInject input because it has not been created.</source>
        <translation>Грешка: Не можемо да покреном GLInject улаз зато што није креиран.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="865"/>
        <source>Started input.</source>
        <translation>Покрени улаз.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="894"/>
        <source>Stopping input ...</source>
        <translation>Заустављање улаза...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="909"/>
        <source>Stopped input.</source>
        <translation>Заустављен улаз</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1018"/>
        <location filename="../GUI/PageRecord.cpp" line="1028"/>
        <source>Pause recording</source>
        <translation>Паузирај снимање</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1021"/>
        <location filename="../GUI/PageRecord.cpp" line="1031"/>
        <source>Start recording</source>
        <translation>Покрени снимање</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1039"/>
        <source>Stop preview</source>
        <translation>Зауставите преглед</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1042"/>
        <source>Start preview</source>
        <translation>Покрените преглед</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1072"/>
        <source>Error: Something went wrong while creating the synth.</source>
        <translation>Грешка: Нешто се десило приликом креирања синта.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1115"/>
        <source>Are you sure that you want to cancel this recording?</source>
        <translation>Да ли сте сигурни да желите да прекинете снимање?</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1130"/>
        <source>You haven&apos;t recorded anything, there is nothing to save.

The start button is at the top ;).</source>
        <translation>Нисте ништа снимили, нема шта да се сачува.

Старт дугме се налази на врху ;).</translation>
    </message>
</context>
<context>
    <name>PageWelcome</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="40"/>
        <source>&lt;p&gt;Welcome to SimpleScreenRecorder!&lt;/p&gt;

&lt;p&gt;Despite the name, this program actually has a lot of options. Don&apos;t worry though, there are really just two things that you need to know. One, the default settings are usually fine. If you don&apos;t know what something does, just use the default. Two, almost all settings have tooltips. Just hover the mouse over something to find out what it does.&lt;/p&gt;

&lt;p&gt;For more information:&lt;br&gt;
%1&lt;/p&gt;</source>
        <translation>&lt;p&gt;Добро дошли у SimpleScreenRecorder!&lt;/p&gt;

&lt;p&gt;Упркос имену (превод - просто снимање екрана), овај програм има много опција. Ипак немојте да се бринете, има само две ствари које треба да знате. Прво - стандардна подешавања су углавном добра. Ако не знате шта нешто ради, користите подразумевана подешавања. Друго, скоро свака ставка има тултипове. Само пређите мишем преко нечега што Вас занима и сазнајте шта ради.&lt;/p&gt;

&lt;p&gt;За више информација:&lt;br&gt;
%1&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="50"/>
        <source>About SimpleScreenRecorder</source>
        <translation>О SimpleScreenRecorder</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="72"/>
        <source>Continue</source>
        <translation>Наставите</translation>
    </message>
</context>
<context>
    <name>ProfileBox</name>
    <message>
        <source>Profile</source>
        <translation type="obsolete">Профил</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="37"/>
        <source>Save</source>
        <translation>Сачувај</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="38"/>
        <source>Save the current settings to this profile.</source>
        <translation>Сачувајте тренутна подешавања овог профила.</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="39"/>
        <source>New</source>
        <translation>Нов</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="40"/>
        <source>Create a new profile with the current settings.</source>
        <translation>Креирајте профил са текућим подешавањима.</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="41"/>
        <source>Delete</source>
        <translation>Избришите</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="42"/>
        <source>Delete this profile.</source>
        <translation>Избришите овај профил.</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="96"/>
        <source>(none)</source>
        <translation>(без)</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="139"/>
        <source>Error: Can&apos;t load profile!</source>
        <translation>Грешка: Не можемо да учитамо профил!</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="147"/>
        <source>Are you sure that you want to overwrite this profile?</source>
        <translation>Да ли сте сигурни да желите да прегазите овај профил?</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="159"/>
        <source>Enter a name for the new profile:</source>
        <translation> Упишите име за нови профил:</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="165"/>
        <source>A profile with the same name already exists. Are you sure that you want to replace it?</source>
        <translation>Профил са овим именом већ постоји. Да ли сте сигурни да желите да га прегазите?</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="181"/>
        <source>Are you sure that you want to delete this profile?</source>
        <translation>Да ли сте сигурни да желите да избришете профил?</translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <location filename="../common/Dialogs.cpp" line="35"/>
        <location filename="../common/Dialogs.cpp" line="72"/>
        <source>&amp;OK</source>
        <translation>&amp;У реду</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="36"/>
        <location filename="../common/Dialogs.cpp" line="73"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Откажи</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="37"/>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="38"/>
        <source>Yes, always</source>
        <translation>Да, увек</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="39"/>
        <source>&amp;No</source>
        <translation>&amp;Не</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="40"/>
        <source>No, never</source>
        <translation>Не, никад</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Да</translation>
    </message>
    <message>
        <source>Yes, always</source>
        <translation type="obsolete">Да, увек</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Не</translation>
    </message>
    <message>
        <source>No, never</source>
        <translation type="obsolete">Не, никад</translation>
    </message>
</context>
<context>
    <name>SyncDiagram</name>
    <message>
        <location filename="../AV/Output/SyncDiagram.cpp" line="50"/>
        <source>Synchronization Diagram</source>
        <translation>Синхронизација диаграма</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="257"/>
        <source>Video in</source>
        <translation>Видео улаз</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="258"/>
        <source>Audio in</source>
        <translation>Аудио улаз</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="259"/>
        <source>Video out</source>
        <translation>Видео излаз</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="260"/>
        <source>Audio out</source>
        <translation>Аудио излаз</translation>
    </message>
</context>
</TS>
