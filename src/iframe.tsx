<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Include External HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .description {
            margin-bottom: 20px;
        }
        .iframe-container {
            width: 100%;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="description">
        <h1>Welcome to My Web Page</h1>
        <p>This page includes an external HTML content below:</p>
    </div>

    <div class="iframe-container">
        <iframe id="external-content" src="https://example.com" width="100%" frameborder="0" scrolling="no"></iframe>
    </div>

    <script>
        function resizeIframe() {
            const iframe = document.getElementById('external-content');
            iframe.onload = function() {
                iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            }
        }
        resizeIframe();
    </script>
</body>
</html>
