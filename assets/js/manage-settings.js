$(document).ready(function(){
    
    if(localStorage.getItem("setting_data_play")=="playsound"){
      $('#setting_sound').attr('data-play',"playsound");
      $('#sound_icon_play').show();
      $('#sound_icon_notplay').hide();
    }else if(localStorage.getItem("setting_data_play")=="notplaysound"){
      $('#setting_sound').attr('data-play',"notplaysound");
      $('#sound_icon_play').hide();
      $('#sound_icon_notplay').show();
    }

    if(localStorage.getItem("setting_graph")=="show"){
        $('#box_graph').show();
    }else if(localStorage.getItem("setting_graph")=="hide"){
        $('#box_graph').hide();
    }

    if(localStorage.getItem("setting_left_click")=="show"){
        $('#box_left_click').show();
    }else if(localStorage.getItem("setting_left_click")=="hide"){
        $('#box_left_click').hide();
    }

    if(localStorage.getItem("setting_middle_click")=="show"){
        $('#box_middle_click').show();
    }else if(localStorage.getItem("setting_middle_click")=="hide"){
        $('#box_middle_click').hide();
    }


    if(localStorage.getItem("setting_right_click")=="show"){
        $('#box_right_click').show();
    }else if(localStorage.getItem("setting_right_click")=="hide"){
        $('#box_right_click').hide();
    }



    if(localStorage.getItem("setting_double_click")=="show"){
        $('#box_double_click').show();
    }else if(localStorage.getItem("setting_double_click")=="hide"){
        $('#box_double_click').hide();
    }

    display_score_statistics();

});


function display_score_statistics(){
    score_array = JSON.parse(localStorage.getItem("score_statistics"));
    // console.log(score_array);
    if(score_array){
      for (let i = 0; i < score_array.length; i++) {
        single_score = score_array[i];
        $("#score_stat_list").append('<li class="list-group-item score_item mt-2">'+single_score["clicks"]+' Clicks | '+single_score["second"]+' second | '+single_score["cps"]+' CPS</li>');
      }
    }
}


$('#setting_sound').click(function() {
  var data_play = $("#setting_sound").data("play");
  console.log(data_play);
  if(data_play=="playsound"){
    $('#setting_sound').attr('data-play',"notplaysound");
    $('#sound_icon_play').show();
    $('#sound_icon_notplay').hide();
    localStorage.setItem("setting_data_play","notplaysound");
    location.reload();

  }else if(data_play=="notplaysound"){
    $('#setting_sound').attr('data-play',"playsound");
    localStorage.setItem("setting_data_play","playsound");
    $('#sound_icon_play').hide();
    $('#sound_icon_notplay').show();
    location.reload();
  }
  
  // if ($('#box_score_marquee').is(':hidden')) {
  //   $('#box_score_marquee').show();
  //   localStorage.setItem("setting_score_marquee", "show");
  // }else{
  //   $('#box_score_marquee').hide();
  //   localStorage.setItem("setting_score_marquee", "hide");
  // }
});



$('#setting_graph').click(function() {
  if ($('#box_graph').is(':hidden')) {
    $('#box_graph').show();
    localStorage.setItem("setting_graph","show");
  }else{
    $('#box_graph').hide();
    localStorage.setItem("setting_graph","hide");
  }
});


$('#setting_left_click').click(function() {
  if ($('#box_left_click').is(':hidden')) {
    $('#box_left_click').show();
    localStorage.setItem("setting_left_click","show");
  }else{
    $('#box_left_click').hide();
    localStorage.setItem("setting_left_click","hide");
  }
});


$('#setting_middle_click').click(function() {
  if ($('#box_middle_click').is(':hidden')) {
    $('#box_middle_click').show();
    localStorage.setItem("setting_middle_click","show");
  }else{
    $('#box_middle_click').hide();
    localStorage.setItem("setting_middle_click","hide");
  }
});


$('#setting_right_click').click(function() {
  if ($('#box_right_click').is(':hidden')) {
    $('#box_right_click').show();
    localStorage.setItem("setting_right_click","show");
  }else{
    $('#box_right_click').hide();
    localStorage.setItem("setting_right_click","hide");
  }
});


$('#setting_double_click').click(function() {
  if ($("#box_double_click").is(':hidden')) {
    console.log("ok");
    $('#box_double_click').show();
    localStorage.setItem("setting_double_click","show");
  }else{
    console.log("notok");
    $('#box_double_click').hide();
    localStorage.setItem("setting_double_click","hide");
  }
});
