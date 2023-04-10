import {
	UseInterceptors,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// WHAT: Custom interceptor
// WHY:  Because password is included in the outgoing reponse. So I want to serialise the response meaning remove password from response

export class CustomInterceptor implements NestInterceptor {
	constructor(private dto: ClassConstructor) {}
	// 1
	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<any> | Promise<Observable<any>> {
		// 2
		console.log('run before handler');
		return next.handle().pipe(
			// 3 data is the data that is going to be send back in the outgoing response
			map((data) => {
				console.log('run before response is sent out');
				// 4 - turn data into an instance of dto that's passed in
				return plainToInstance(this.dto, data, {
					//include in the response	only the property marked with expose decorator
					excludeExtraneousValues: true,
				});
			}),
		);
	}
}

interface ClassConstructor {
	new (...args: any[]): object;
}
// 3 :
// End Goal : @Serialize(UserDto) => see controllers
// What: Custom decorator that takes a dto and returns built in decorator UseInterceptors which takes an instance of our custom interceptor class, which expects a DTO as argument
export function Serialize(dto: ClassConstructor) {
	return UseInterceptors(new CustomInterceptor(dto));
}
