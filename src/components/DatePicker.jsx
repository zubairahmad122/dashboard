import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'; // Import format function from date-fns
import { Calendar } from 'lucide-react';

const DateBox = () => {
    const [selectedDate, setSelectedDate] = useState(null);
 

    const handleDateChange = (date) => {
        setSelectedDate(date);
       
    };

    return (
        <div>
            <div className='w-[190px] h-10 flex items-center justify-center border-[#B9BDC7] border rounded-lg py-[10px] px-4 relative'>

                <DatePicker
                    selected={selectedDate}
                    value={selectedDate ? format(selectedDate, 'EEE, MM/dd') : 'select date'}
                    onChange={handleDateChange}
                    dateFormat="MM/dd"
                    className='border z-10 relative text-sm text-grey6 bg-transparent border-none w-full outline-none'
                />  

            <Calendar className='absolute text-grey6 w-5 h-5 right-3 z-[2]' />
            </div>


        </div>
    );
};

export default DateBox;
