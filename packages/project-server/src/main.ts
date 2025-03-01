import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TransformInterceptor } from './transform/transform.interceptor'
import { HttpExceptionFilter } from './http-exeption/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api') // 路由全局前缀
  app.useGlobalInterceptors(new TransformInterceptor()) // 全局拦截器
  app.useGlobalFilters(new HttpExceptionFilter()) // 全局异常过滤器
  app.enableCors() // 允许跨域
  await app.listen(8080)
}
bootstrap()
