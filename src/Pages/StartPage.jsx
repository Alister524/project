import React from "react";

export const StartPage = () =>{
    return(
        <div className="startPage">
            <div className="Invite">
                <h1>Добрый день, рад с Вами познакомится!</h1>
                <h2>Меня зовут - Харламов Александр</h2>
                <p><em><b>Как начинающий специалист в этой сфере, рад продемонстрировать примеры проектов, которые я делал на этапе обучения и продолжаю их улучшать</b></em></p>
            <div className="reference">   
                <button type="button"><a href='https://alister524.github.io/test-game/root/Display.html' target="_blank">Первый проект</a></button>
                <p>Первый проект сформирован с использованием нативного JS + CSS3 + HTML разметки</p>
                <button type="button"><a href='https://alister524.github.io/task-sheet/' target="_blank">Второй проект</a></button>
                <p>Второй проект сформирован с использование библиотеки React и TypeScript</p>
            </div>   
                <strong>Для ознакомления с третьим проектом, прошу нажать на кнопку "Работа с постами" в основном меню.</strong>
            </div>
            
            <div className="bodyLetter">
                <p>    
                    Мной были пройдены видеокурсы с практикой, разработкой проектов на стеке: JS + React + TypeScript + node.js + css3
                    ( в том числе модульный подход с подключением библиотеки normalize), а так же чтение технической документации. 
                </p>
                <ul>
                    <h4>Пройдено обучение по:</h4>
                    <li>HTML и CSS - Видеоматериалы, учебник htmlbook.ru</li>

                    <li>JavaScript - Видеоматериалы, учебник learn javascript</li>

                    <li>React - Видеоматериалы, технические материалы с оф.сайта React.</li>

                    <li>TypeScript - Видеоматериалы, технические материалы на сайте typescript-lang.ru</li>

                    <li>Git и GitHub - Видеоматериалы.</li>

                    <li>Webpack - Видеоматериалы, технические материалы на оф. сайте webpack.</li>

                    <li>Rest API - Видеоматериалы</li>
                </ul>            
            </div>
            <div className="endLetter">
                <p className="over">
                    Я с радостью буду узнавать новые технологии для решения задач любой сложности и особенно это будет замечательно в сплоченной и дружной команде! 
                    <strong> Очень надеюсь, что нам по пути!</strong>
                </p>
            </div>
        </div>
    )
}

