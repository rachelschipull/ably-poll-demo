const eventform = document.getElementById('opinion-form');

eventform.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=snack]:checked').value;const data = {snack: choice};

    axios.post('/poll', data).then( (data) => {  
        console.log(data);  
    });  
    e.preventDefault();  
    });
    
let dataPoints = [{label: 'Cheese', y: 0},{label: 'Chips', y: 0},{label: 'Chocolate', y: 0},{label: 'Something Else', y: 0},];

const chartContainer = document.querySelector('#chart-container');
    
if (chartContainer) {
    const chart = new CanvasJS.Chart('chart-container', {
        animationEnabled: true,theme: 'theme1',title: {text: 'Midnight Snack'},data: [{type: 'column',dataPoints: dataPoints}]});
    
        chart.render();  
  
            //insert your subscriber ABLY key 
            const Ably = new Ably.Realtime(ABLY_SUB_KEY);
            const ably = ably.channels.get('ably-nest');
            channel.subscribe('vote', function(poll) {
              
            dataPoints = dataPoints.map(x => {  
                if (x.label == poll.data.snack) {  
                    x.y += poll.data.points;  
                    return x;  
                } else {  
                    return x;  
                }  
            });  
            chart.render();  
})
}