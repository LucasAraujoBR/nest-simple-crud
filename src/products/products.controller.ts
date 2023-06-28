import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {
    // Lógica para obter todos os produtos
    return 'Listado'
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    // Lógica para obter um produto pelo ID
    return 'Capturado com detalhes'
  }

  @Post()
  createProduct(@Body() product: any) {
    // Lógica para criar um novo produto
    return 'Criado'
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: any) {
    // Lógica para atualizar um produto existente
    return 'Atualizado'
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    // Lógica para excluir um produto
    return 'Deletado'
  }
}
