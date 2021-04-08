$(function(){
    
    // 1. 반응형에 상관 없이, 어떤 device에서든지 고정적으로 실행되는 함수 및 그 변수들
    // device 확인이나, resize 할 때 확인할 윈도우 창의 크기를 확인하는 변수를 최상단에 설정해둠 (전역 변수라서 하단의 2, 3 함수 안에서도 사용 가능)
    var win_width = $(window).width();
    
    // 2. 화면을 줄이거나 늘일 때 새로고침 (f5)
    $(window).resize(function(){
        
        // resize 시 초기화 실행
        init();
        
        // 줄이거나 늘일 때마다 window의 width값이 변하므로 이를 변수에 넣는다
        win_width = $(this).width();
        
        // 모바일이나 PC나 어느 디바이스에서든지 공통적으로 초기화해야할 목록들은 조건문 없이 여기에 그냥 작성
                
        // 2-1) mobile size
        if (win_width < 400){
            
        }
        // 2-2) tablet size
        if (400 < win_width < 1024){
            
        }
        // 2-3) PC size
        else {
            
        }
    })
    
    // 3. 어느 device로 처음 접속해서 이 파일을 보는지에 맞춰 초기화
    init();
    
    function init (){
        
        // 3-1) mobile로 접속
        if (win_width < 400){
            
        }
        // 3-1) tablet으로 접속
        else if (400 < win_width < 1024){
            
        }
        // 3-2) PC로 접속    
        else {
            
        }
    }
    
})