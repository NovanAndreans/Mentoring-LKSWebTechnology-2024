<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Add Grid to Image</title>
    <style>
        .card {
            width: 200px;
            height: 200px;
            overflow: hidden;
            display: inline-block;
            margin: 5px;
            cursor: pointer;
        }

        #imageContainer {
            display: flex;
            flex-wrap: wrap;
        }
    </style>
</head>

<body>
    <input type="number" id="rowsInput" placeholder="Rows">
    <input type="number" id="columnsInput" placeholder="Columns">
    <button onclick="addGrid()">Add Grid to Image</button>
    <div id="imageContainer"></div>

    <script>
        function addGrid() {
            const rows = document.getElementById('rowsInput').value;
            const columns = document.getElementById('columnsInput').value;

            if (!rows || !columns) {
                alert('Please enter both rows and columns.');
                return;
            }

            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = '';

            const img = new Image();
            img.src = 'image.jpg'; // Replace with your image path
            img.onload = function() {
                const width = this.width / columns;
                const height = this.height / rows;

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');

                        canvas.width = width;
                        canvas.height = height;

                        ctx.drawImage(img, j * width, i * height, width, height, 0, 0, width, height);

                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.appendChild(canvas);

                        card.onclick = function() {
                            this.style.opacity = '0';
                        };

                        imageContainer.appendChild(card);
                    }
                }
            };
        }
    </script>
</body>

</html>