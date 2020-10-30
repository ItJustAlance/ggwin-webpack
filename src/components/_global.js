import Vue from 'vue';
import {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    headerCase,
    noCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase
} from "change-case";

//
Vue.config.productionTip = false
// Подключить и зарегистрировать компоненты из директории .components
const requireComponent = require.context(
    // Относительный путь до каталога компонентов
    './vue',
    // Обрабатывать или нет подкаталоги
    true,
    // Регулярное выражение для определения файлов базовых компонентов
    /\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Получение конфигурации компонента
    const componentConfig = requireComponent(fileName)

    // Получение имени компонента в PascalCase
    const componentName =
        pascalCase(
            // Получаем имя файла независимо от глубины вложенности
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')

    )
    /* eslint-disable no-console */
    console.log('fileName',fileName,'=>',componentName);
    /* eslint-enable no-console */
    // Глобальная регистрация компонента
    Vue.component(
        componentName,
        // Поиск опций компонента в `.default`, который будет существовать,
        // если компонент экспортирован с помощью `export default`,
        // иначе будет использован корневой уровень модуля.
        componentConfig.default || componentConfig
    )
})
