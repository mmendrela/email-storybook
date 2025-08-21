// Main application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    setupTabSwitching();
    
    // Template form handling
    setupTemplateForm();
    
    // Device preview switching
    setupDevicePreview();
    
    // Code copying functionality
    setupCodeCopying();
    
    // Download functionality
    setupDownloads();
});

function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and target pane
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
}

function setupTemplateForm() {
    const form = document.getElementById('template-form');
    const resetBtn = document.getElementById('reset-btn');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const params = Object.fromEntries(formData.entries());
            
            try {
                showLoading(true);
                
                const response = await fetch(`/template/${window.templateData.id}/generate`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Update code displays
                    updateCodeDisplay('mjml-code', result.mjml, 'xml');
                    updateCodeDisplay('html-code', result.html, 'html');
                    
                    // Refresh preview iframe
                    refreshPreview(params);
                    
                    // Show success message
                    showNotification('Email wygenerowany pomyślnie!', 'success');
                } else {
                    showNotification('Błąd generowania: ' + result.error, 'error');
                }
            } catch (error) {
                showNotification('Błąd połączenia: ' + error.message, 'error');
            } finally {
                showLoading(false);
            }
        });
        
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                // Reset form to default values
                const inputs = form.querySelectorAll('input');
                inputs.forEach(input => {
                    const defaultValue = input.dataset.default || input.defaultValue;
                    input.value = defaultValue;
                });
                
                // Trigger form submit to refresh preview
                form.dispatchEvent(new Event('submit'));
            });
        }
    }
}

function setupDevicePreview() {
    const deviceButtons = document.querySelectorAll('.device-btn');
    const iframe = document.getElementById('email-preview');
    
    deviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const width = this.dataset.width;
            
            // Remove active class from all buttons
            deviceButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update iframe width
            if (iframe) {
                iframe.style.width = width;
                iframe.style.margin = width === '100%' ? '0' : '0 auto';
                iframe.style.display = 'block';
            }
        });
    });
    
    // Refresh preview button
    const refreshBtn = document.getElementById('refresh-preview');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            if (iframe) {
                iframe.src = iframe.src; // Force reload
            }
        });
    }
}

function setupCodeCopying() {
    // Copy MJML button
    const copyMjmlBtn = document.getElementById('copy-mjml');
    if (copyMjmlBtn) {
        copyMjmlBtn.addEventListener('click', function() {
            const codeElement = document.getElementById('mjml-code');
            copyToClipboard(codeElement.textContent, 'Kod MJML skopiowany!');
        });
    }
    
    // Copy HTML button
    const copyHtmlBtn = document.getElementById('copy-html');
    if (copyHtmlBtn) {
        copyHtmlBtn.addEventListener('click', function() {
            const codeElement = document.getElementById('html-code');
            copyToClipboard(codeElement.textContent, 'Kod HTML skopiowany!');
        });
    }
}

function setupDownloads() {
    // Download MJML button
    const downloadMjmlBtn = document.getElementById('download-mjml');
    if (downloadMjmlBtn) {
        downloadMjmlBtn.addEventListener('click', function() {
            const codeElement = document.getElementById('mjml-code');
            const filename = `${window.templateData.name.toLowerCase().replace(/\s+/g, '-')}.mjml`;
            downloadFile(codeElement.textContent, filename, 'text/plain');
        });
    }
    
    // Download HTML button
    const downloadHtmlBtn = document.getElementById('download-html');
    if (downloadHtmlBtn) {
        downloadHtmlBtn.addEventListener('click', function() {
            const codeElement = document.getElementById('html-code');
            const filename = `${window.templateData.name.toLowerCase().replace(/\s+/g, '-')}.html`;
            downloadFile(codeElement.textContent, filename, 'text/html');
        });
    }
}

function updateCodeDisplay(elementId, code, language) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = code;
        element.className = `language-${language}`;
        
        // Re-highlight with Prism
        if (window.Prism) {
            Prism.highlightElement(element);
        }
    }
}

function refreshPreview(params) {
    const iframe = document.getElementById('email-preview');
    if (iframe) {
        const urlParams = new URLSearchParams(params);
        const newSrc = `/preview/${window.templateData.id}?${urlParams.toString()}`;
        iframe.src = newSrc;
    }
}

function copyToClipboard(text, successMessage) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(successMessage, 'success');
        }).catch(err => {
            console.error('Błąd kopiowania:', err);
            fallbackCopyToClipboard(text, successMessage);
        });
    } else {
        fallbackCopyToClipboard(text, successMessage);
    }
}

function fallbackCopyToClipboard(text, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification(successMessage, 'success');
    } catch (err) {
        showNotification('Błąd kopiowania do schowka', 'error');
    }
    
    document.body.removeChild(textArea);
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(`Plik ${filename} został pobrany!`, 'success');
}

function showLoading(show) {
    const submitBtn = document.querySelector('#template-form button[type="submit"]');
    if (submitBtn) {
        if (show) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generowanie...';
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-sync"></i> Wygeneruj ponownie';
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
        border-radius: 6px;
        padding: 12px 16px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}