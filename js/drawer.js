document.getElementById('open-drawer-btn').addEventListener('click', function () {
  const slideOver = document.getElementById('slide-over');
  const backdrop = document.getElementById('backdrop');
  const panel = document.getElementById('panel');

  slideOver.classList.remove('hidden');

  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    panel.classList.remove('translate-y-full');
    panel.classList.add('translate-y-0');
  }, 10);
});

function closeDrawer() {
  const slideOver = document.getElementById('slide-over');
  const backdrop = document.getElementById('backdrop');
  const panel = document.getElementById('panel');

  panel.classList.remove('translate-y-0');
  panel.classList.add('translate-y-full');

  setTimeout(() => {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
  }, 200);

  setTimeout(() => {
    slideOver.classList.add('hidden');
  }, 500);
}

document.getElementById('close-drawer-btn').addEventListener('click', closeDrawer);

// Close drawer on outside click (anywhere except the panel)
document.getElementById('slide-over').addEventListener('click', function (e) {
  const panel = document.getElementById('panel');
  if (!panel.contains(e.target)) {
    closeDrawer();
  }
});
