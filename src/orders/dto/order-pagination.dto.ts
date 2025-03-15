import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList)
  status: OrderStatus;
}
