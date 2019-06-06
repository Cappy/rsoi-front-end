import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Booking } from './booking';
import { ActivatedRoute } from '@angular/router';
 
@Injectable()
export class BookingsService {
	
	page: number;
	size: number;
    private url = "https://gateway20190603104549.azurewebsites.net";
 
    constructor(private http: HttpClient, private route: ActivatedRoute) {		
	this.route.queryParams.subscribe(params => {
    this.page = params['page'];
    this.size = params['size'];
    });
    }
	
	getAllBookings() {
        return this.http.get(this.url + '/api/bookings');
    }
	
	getBooking(id: string) {
        return this.http.get(this.url + '/api/booking-with-info' + '/' + id);
    }
 
    getBookings(page: number, size: number) {
        return this.http.get(this.url + '/api/bookings-with-info' + '?page=' + page + '&size=' + size);
    }
	
	getBookingsOfUser(page: number, size: number, userid: string) {
        return this.http.get(this.url + '/api/bookings-with-info-of-user' + '?page=' + page + '&size=' + size + '&userid=' + userid);
    }
 
    createBooking(booking: Booking) {
		return this.http.post(this.url + '/api/bookings', booking, { observe: 'response', responseType: 'text' });
    }
    updateBooking(booking: Booking) {
  
        return this.http.put(this.url + '/api/bookings/' + booking.bookingid, booking, { observe: 'response', responseType: 'text' });
    }
    deleteBooking(bookingId: string) {
        return this.http.delete(this.url + '/api/bookings/' + bookingId);
    }
}