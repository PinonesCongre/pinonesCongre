  const rolField = document.getElementById('rol');
  const publicationsField = document.getElementById('publications');
  const hoursField = document.getElementById('hours');
  const visitsField = document.getElementById('visits');
  const videosField = document.getElementById('videos');

  const originalHoursStyle = {
    opacity: window.getComputedStyle(hoursField).getPropertyValue('opacity'),
    backgroundColor: window.getComputedStyle(hoursField).getPropertyValue('background-color'),
  };

  const resetHoursStyle = () => {
    hoursField.style.opacity = originalHoursStyle.opacity;
    hoursField.style.backgroundColor = originalHoursStyle.backgroundColor;
  };

  rolField.addEventListener('change', function () {
    const selectedRol = rolField.value;

    const optionsToDisable = ['Publicador', 'Precursor Auxiliar'];

    if (optionsToDisable.includes(selectedRol)) {
      publicationsField.value = '0';
      hoursField.value = '0';
      visitsField.value = '0';
      videosField.value = '0';
      publicationsField.disabled = true;
      hoursField.disabled = true;
      visitsField.disabled = true;
      videosField.disabled = true;
      publicationsField.style.opacity = 0.5;
      hoursField.style.opacity = 0.5;
      visitsField.style.opacity = 0.5;
      videosField.style.opacity = 0.5;
      publicationsField.style.backgroundColor = '#e0e0e0';
      hoursField.style.backgroundColor = '#e0e0e0';
      visitsField.style.backgroundColor = '#e0e0e0';
      videosField.style.backgroundColor = '#e0e0e0';

      if (selectedRol === 'Precursor Regular') {
        hoursField.disabled = false;
        resetHoursStyle();
      }
    } else {
      publicationsField.disabled = false;
      hoursField.disabled = false;
      visitsField.disabled = false;
      videosField.disabled = false;
      publicationsField.style.opacity = 1;
      visitsField.style.opacity = 1;
      videosField.style.opacity = 1;
      publicationsField.style.backgroundColor = '';

      if (selectedRol === 'Precursor Regular') {
        publicationsField.value = '0';
        visitsField.value = '0';
        videosField.value = '0';
        publicationsField.disabled = true;
        visitsField.disabled = true;
        videosField.disabled = true;
        publicationsField.style.opacity = 0.5;
        visitsField.style.opacity = 0.5;
        videosField.style.opacity = 0.5;
        publicationsField.style.backgroundColor = '#e0e0e0';
        visitsField.style.backgroundColor = '#e0e0e0';
        videosField.style.backgroundColor = '#e0e0e0';
      }
    }
    
    // Habilitar el campo "Número de Horas" cuando se selecciona "Precursor Auxiliar"
    if (selectedRol === 'Precursor Auxiliar') {
      hoursField.disabled = false;
      resetHoursStyle();
    }
  });

  resetHoursStyle();