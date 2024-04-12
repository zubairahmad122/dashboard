
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'May', value: 80 },
    { month: 'Jun', value: 40 },
    { month: 'Jul', value: 30 },
    { month: 'Aug', value: 60 },
    { month: 'Sep', value: 20 },
    { month: 'Oct', value: 70 },
    { month: 'Nov', value: 30 },
    { month: 'Dec', value: 90 },
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 70 },
];

const Barchart = () => {
    return (
        <ResponsiveContainer width="100%" height={200}>
        <BarChart  data={data}>
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#27AE61" />
                    <stop offset="100%" stopColor="#9CEABD" />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
            <XAxis axisLine={false} tickLine={false}  tick={{ fill: '#858D9D', fontSize: 14,fontFamily:'Inter' , fontWeight:400 }}  dataKey="month" />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`}  tick={{ fill: '#858D9D', fontSize: 14,fontFamily:'Inter' , fontWeight:400 }} />
            <Tooltip />
           
          
      
            <Bar dataKey="value" barSize={22} stackId="a" width={90} fill="url(#gradient)" />
            
        </BarChart>
    </ResponsiveContainer>



    
    );
};

export default Barchart;





// const Barchart = () => {
//     return (
//         <ResponsiveContainer width="100%" height="282px">
//         <BarChart  data={data}>
//             <defs>
//                 <linearGradient id="gradient" x1="0" y1="0" x2="0.5" y2="1">
//                     <stop offset="0%" stopColor="#27AE61" />
//                     <stop offset="100%" stopColor="#9CEABD" />
//                 </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
//             <XAxis axisLine={false} tickLine={false}  tick={{ fill: '#858D9D', fontSize: 14,fontFamily:'Inter' , fontWeight:400 }}  dataKey="month" />
//             <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`}  tick={{ fill: '#858D9D', fontSize: 14,fontFamily:'Inter' , fontWeight:400 }} />
//             <Tooltip />
           
          
      
//             <Bar dataKey="value" barSize={22} stackId="a" width={90} fill="url(#gradient)" />
            
//         </BarChart>
//     </ResponsiveContainer>



    
//     );
// };

// export default Barchart;
