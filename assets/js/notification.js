/* I'm leaving this code in the project in case anyone is interested in how the click and type events where created.
An IIFE is used as an easy method to keep global variables local.
*/
(function () {
  const theBody = document.querySelector("body");
  const notificationFrame = createNotificationFrame();

  window.addEventListener("keyup", function (e) {
    let eventMessage;
    switch (e.key) {
      case "ArrowUp":
        eventMessage = `<i class="fa fa-arrow-up" aria-hidden="true"></i>`;
        break;
      case "ArrowDown":
        eventMessage = `<i class="fa fa-arrow-down" aria-hidden="true"></i>`;
        break;
      case "ArrowLeft":
        eventMessage = `<i class="fa fa-arrow-left" aria-hidden="true"></i>`;
        break;
      case "ArrowRight":
        eventMessage = `<i class="fa fa-arrow-right" aria-hidden="true"></i>`;
        break;
      default:
        eventMessage = false;
        break;
    }
    createNotification(eventMessage);
  });

  window.addEventListener("mousedown", function (e) {
    createDot(e);
  });

  function createDot(event) {
    const diameter = 80;
    const { clientX, clientY } = event;
    const dot = document.createElement("div");
    dot.style.backgroundColor = "#ff0";
    dot.style.borderRadius = "50%";
    dot.style.height = diameter + "px";
    dot.style.left = clientX - diameter / 2 + "px";
    dot.style.pointerEvents = "none";
    dot.style.position = "fixed";
    dot.style.top = clientY - diameter / 2 + "px";
    dot.style.width = diameter + "px";
    dot.style.zIndex = "999999";
    dot.classList.add("dot");
    notificationFrame.appendChild(dot);
    dot.animate(
      [
        // opacity
        { opacity: "1", transform: "scale(0)" },
        { opacity: "0", transform: "scale(1.1)" },
      ],
      {
        // timing options
        duration: 500,
        fill: "forwards",
      }
    );
    setTimeout(function () {
      dot.remove();
    }, 600);
  }

  function createNotificationFrame() {
    const noteFrame = document.createElement("div");
    noteFrame.setAttribute(
      "data-student-notification",
      "Students: Ignore this div element. This is the frame I use to create the left click yellow dot and  pop-ups in the bottom left of the page to indicate keypresses."
    );
    noteFrame.classList.add("notification-frame");
    noteFrame.style.alignItems = "flex-end";
    noteFrame.style.backgroundColor = "rgba(0,0,0,0.01)";
    noteFrame.style.bottom = "0";
    noteFrame.style.display = "flex";
    noteFrame.style.height = "100%";
    noteFrame.style.justifyContent = "flex-end";
    noteFrame.style.left = "0";
    noteFrame.style.padding = "10px";
    noteFrame.style.pointerEvents = "none";
    noteFrame.style.position = "fixed";
    noteFrame.style.width = "100%";
    noteFrame.style.zIndex = "999999";
    theBody.appendChild(noteFrame);
    return noteFrame;
  }
  function createNotification(message) {
    if (!!message) {
      const notification = document.createElement("div");
      notification.innerHTML = message;
      notification.style.backgroundColor = "#fff";
      notification.style.borderRadius = "5px";
      notification.style.border = "3px solid #ffb000";
      notification.style.color = "#ffb000 ";
      notification.style.height = "44px";
      notification.style.letterSpacing = "3px";
      notification.style.padding = "10px 20px";
      notification.style.margin = "10px";
      notification.animate(
        [
          /* 
          There has to be a better way. :(
          I need to learn more about subtle animations with JS. We all have plenty to learn. When you work with JS animation, it may be a good idea to use,
          https://createjs.com/tweenjs
            */
          { opacity: "1", transform: "scale(1)" },
          { opacity: "1", transform: "scale(1.4)", color: "#ffb000" },
          { opacity: "1", transform: "scale(1)" },
          { opacity: "1", transform: "scale(1.2)" },
          { opacity: "1", transform: "scale(1)" },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          { opacity: "1" },
          { opacity: "0", color: "#fff" },
        ],
        {
          // timing options
          duration: 1500,
          fill: "forwards",
        }
      );
      notificationFrame.appendChild(notification);

      setTimeout(function () {
        notification.remove();
      }, 1500);
    }
  }
})();
