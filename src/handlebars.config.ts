import handlebars from 'handlebars'
import { join } from 'path'


const layoutsDir = join(__dirname, 'views', 'layouts')
const partialsDir = join(__dirname, 'views', 'partials')

export { handlebars, layoutsDir, partialsDir }