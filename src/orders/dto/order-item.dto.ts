import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class OrderItemDto {
    @IsNumber()
    @IsPositive()
    productId: number;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    quantity: number;
}
