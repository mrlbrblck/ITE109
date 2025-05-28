
/**
 * Listener for scroll event to change the background color of the navigation bar
 * when the user scrolls down the page.
 * The background color will change to transparent when at the top of the page.
 * The class 'transparent' is added to the navigation bar when the user scrolls down.
 * The class 'transparent' is removed when the user scrolls back to the top.
 */
window.addEventListener('scroll', () => {
    const navBar = document.getElementById('navBar');
    if (window.scrollY > 0) {
        navBar.classList.add('transparent');
    } else {
        navBar.classList.remove('transparent');
    }
});

// Show only one section at a time
document.querySelectorAll('.navLinkSection').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide all sections
        document.querySelectorAll('.sections').forEach(sec => sec.classList.remove('active'));
        // Show the clicked section
        const target = this.getAttribute('href');
        const section = document.querySelector(target);
        if (section) section.classList.add('active');
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Show the home section by default
document.getElementById('home').classList.add('active');

//For homescreen scrolling effect
document.addEventListener("DOMContentLoaded", () => {
  const scrollLink = document.querySelector(".mouse-scroll");
  const arrow = scrollLink.querySelector(".arrow");
  const sections = ["homeContent", "aboutMeContent"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const currentId = entry.target.id;

          const nextId = currentId === "homeContent" ? "aboutMeContent" : "homeContent";
          scrollLink.setAttribute("href", `#${nextId}`);

            arrow.classList.toggle("rotate-up", currentId !== "homeContent");

        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});


//For contact image change
const socialIcons = document.querySelectorAll('.card-social-icon a');

socialIcons.forEach((iconLink) => {
  iconLink.addEventListener('mouseenter', () => {
    const card = iconLink.closest('.contactDivs');
    if (!card) return;

    const platform = card.dataset.platform;

    switch (platform) {
      case 'instagram':
        card.style.backgroundImage = 'linear-gradient(to right top, #feda75, #fa7e1e, #d62976)';
        break;
      case 'github':
        card.style.backgroundImage = 'linear-gradient(to right top, #333, #6e5494)';
        break;
      case 'twitter':
        card.style.backgroundImage = 'linear-gradient(to right top, #1da1f2, #0d95e8, #0d8ddb)';
        break;
      case 'linkedin':
        card.style.backgroundImage = 'linear-gradient(to right top, #0072b1, #00a0dc, #66c4e9)';
        break;
      default:
        card.style.backgroundColor = 'whitesmoke';
        card.style.backgroundImage = 'none';
    }
  });

  iconLink.addEventListener('mouseleave', () => {
    const card = iconLink.closest('.contactDivs');
    if (card) {
      card.style.backgroundColor = '';
      card.style.backgroundImage = '';
    }
  });
});
