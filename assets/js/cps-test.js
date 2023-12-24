$(document).ready(function () {
  let rippleElements = document.getElementById("clickarea");
  rippleElements.onclick = function (e) {
    const offset = $("#clickarea").offset();
    const X = e.pageX - offset.left;
    const Y = e.pageY - offset.top;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add("ripple");
    rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
    let customColor = this.getAttribute("ripple-color");
    if (customColor) rippleDiv.style.background = customColor;
    this.appendChild(rippleDiv);
    setTimeout(function () {
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  };
});

// manage duration
$(document).ready(function () {
  duration_local_storage = localStorage.getItem("duration");
  timerTxt = document.getElementById("timer");
  if (duration_local_storage == null) {
    duration_local_storage = 5;
  }
  timerTxt.textContent = duration_local_storage + ":00";
});

function setduration(input_duration) {
  localStorage.setItem("duration", input_duration);
  duration_local_storage = localStorage.getItem("duration");
  timerTxt = document.getElementById("timer");
  timerTxt.textContent = duration_local_storage + ":00";
  // location.reload();
}

function setmanualduration() {
  $("#manual_duration_model").modal("show");
  $("#manual_duration_submit").click(function () {
    manual_duration = $("#manual_duration_time").val();
    setduration(parseInt(manual_duration));
    $("#manual_duration_model").modal("hide");
    //location.reload();
  });
}
//end manage duaration

var startTime,
  timerId,
  score = 0,
  clicksound = new Audio("assets/sound/click.wav"),
  duration = parseInt(localStorage.getItem("duration")),
  ended = !0,
  clicsBySeconds = 0,
  timerTxt = document.getElementById("timer"),
  scoreTxt = document.getElementById("score"),
  clicksTxt = document.getElementById("clicks"),
  startBtn = document.getElementById("start"),
  clickArea = document.getElementById("clickarea"),
  show = function (e) {
    e.style.display = "inline";
  },
  hide = function (e) {
    e.style.display = "none";
  };
if (!duration) {
  duration = 5;
}

left_count = 0;
middle_count = 0;
right_count = 0;
double_count = 0;

$("#clickarea").mousedown(function (event) {
  switch (event.which) {
    case 1:
      count = parseInt(left_count) + 1;
      left_count = count;
      // console.log("count"+count);
      $("#left_click_count").text(count);
      // console.log('Left mouse button pressed');
      break;
    case 2:
      count = parseInt(middle_count) + 1;
      middle_count = count;
      // console.log("count"+count);
      $("#middle_click_count").text(count);
      // console.log('Middle mouse button pressed');
      break;
    case 3:
      count = parseInt(right_count) + 1;
      right_count = count;
      // console.log("count"+count);
      $("#right_click_count").text(count);
      // console.log('Right mouse button pressed');
      break;
    default:
      console.log("You have a strange mouse");
  }
});

$("#clickarea").dblclick(function () {
  count = parseInt(double_count) + 1;
  double_count = count;
  console.log("count" + count);
  $("#double_click_count").text(count);
  console.log("double click pressed");
});

function ShowSelectedSecondText(e) {
  duration = e;
}

function startGame() {
  hide(startBtn),
    (score = 0),
    (ended = !1),
    (startTime = new Date().getTime()),
    (timerId = setInterval(function () {
      var e = (new Date().getTime() - startTime) / 1e3;
      e < duration
        ? ((timerTxt.textContent = e.toFixed(2)),
          (clicksTxt.textContent = (score / e).toFixed(2)))
        : ((ended = !0), clearInterval(timerId), endGame());
      graph_time = e.toFixed(2);
      graph_score = (score / e).toFixed(2);
      // graph_set(graph_score,graph_time);
      if (graph_time % 1 == 0) {
        pushscore(graph_score);
        pushlabels(parseInt(graph_time) + "sec");
      }
    }, 1));
}

function endGame() {
  (clicsBySeconds = (score / duration).toFixed(2)),
    (timerTxt.textContent = duration.toFixed(2)),
    (clicksTxt.textContent = clicsBySeconds),
    show(startBtn),
    $("#rank-time").text(duration),
    clicsBySeconds > 0 && clicsBySeconds <= 5
      ? ($("#result_model").modal("show"),
        $("#rank-img").attr("src", "assets/img/turtle.svg"),
        $("#rank-title").text("Turtle!"),
        $("#motivation-text").text(
          "Stop feeling sorry for yourself, Dont be a looser"
        ),
        $("#rank-no-clicks").text(score),
        $("#rank-score").text(clicsBySeconds),
        $("#rank-time").text(duration),
        add_score_statistics(score, duration, clicsBySeconds))
      : clicsBySeconds > 5 && clicsBySeconds <= 8
      ? ($("#result_model").modal("show"),
        $("#rank-img").attr("src", "assets/img/mouse.svg"),
        $("#rank-title").text("Mouse!"),
        $("#motivation-text").text(
          "Smart but not fast, flicker your finger even faster."
        ),
        $("#rank-no-clicks").text(score),
        $("#rank-score").text(clicsBySeconds),
        $("#rank-time").text(duration),
        add_score_statistics(score, duration, clicsBySeconds))
      : clicsBySeconds > 8 && clicsBySeconds <= 10
      ? ($("#result_model").modal("show"),
        $("#rank-img").attr("src", "assets/img/rabbit.svg"),
        $("#rank-title").text("Rabbit!"),
        $("#motivation-text").text(
          "Time to go full throttle, you are not far from being the best."
        ),
        $("#rank-no-clicks").text(score),
        $("#rank-score").text(clicsBySeconds),
        $("#rank-time").text(duration),
        add_score_statistics(score, duration, clicsBySeconds))
      : clicsBySeconds > 10 &&
        ($("#result_model").modal("show"),
        $("#rank-img").attr("src", "assets/img/buffalo.svg"),
        $("#rank-title").text("Buffalo!"),
        $("#rank-no-clicks").text(score),
        $("#rank-score").text(clicsBySeconds),
        $("#motivation-text").text(
          "Your fingers snap at blistering speed just like the speedie cat runs. Hail to the king of clicking."
        ),
        add_score_statistics(score, duration, clicsBySeconds)),
    setTimeout(function () {
      clicsBySeconds > 0 &&
        ($("#result_model").modal("hide"),
        setTimeout(function () {
          whatsapp_share =
            "https://wa.me/?text=I Got a " +
            score +
            " Score in this click test game, i.e., I can click " +
            clicsBySeconds +
            " times in " +
            duration +
            " Second(s). I challenge you to beat my score. Good luck at https://cps-test.io/";
          twitter_share =
            "https://twitter.com/intent/tweet/?text=I Got a " +
            score +
            " Score in this click test game, i.e., I can click " +
            clicsBySeconds +
            " times in " +
            duration +
            " Second(s). I challenge you to beat my score. Good luck at https://cps-test.io/";
          facebook_share =
            "https://facebook.com/sharer/sharer.php?u=https://www.cps-test.io/&description=I Got a " +
            score +
            " Score in this click test game, i.e., I can click " +
            clicsBySeconds +
            " times in " +
            duration +
            " Second(s). I challenge you to beat my score. Good luck at https://cps-test.io/";
          $("#whatsapp_share_btn").attr("href", whatsapp_share);
          $("#twitter_share_btn").attr("href", twitter_share);
          $("#fb_share_btn").attr("href", facebook_share);
          $("#result_model").modal("show");
        }));
    }, 10);
  $("#start_again").show();
  $("#start").hide();
}

function add_score_statistics(clicks, duration, score) {
  score_single =
    '{"clicks":' + clicks + ',"second":' + duration + ',"cps":' + score + "}";
  score_array = JSON.parse(localStorage.getItem("score_statistics"));
  if (score_array == null) {
    console.log("true");
    score_single = "[" + score_single + "]";
    score_array = JSON.parse([score_single]);
  } else {
    score_array.push(JSON.parse(score_single));
  }
  console.log(score_array);
  localStorage.setItem("score_statistics", JSON.stringify(score_array));
}

startBtn.addEventListener("click", function (e) {
  startGame();
}),
  clickArea.addEventListener("click", function (e) {
    var data_play = $("#setting_sound").data("play");
    if (data_play == "playsound") {
      clicksound.play();
    }
    ended || (score++, (scoreTxt.textContent = score));
  });

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "CPS",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

function pushscore(score) {
  myChart.data.datasets[0].data.push(score);
  // console.log(myChart.data.datasets[0].data);
  myChart.update();
}

function pushlabels(time) {
  myChart.data.labels.push(time);
  // console.log(myChart.data.labels);
  myChart.update();
}
