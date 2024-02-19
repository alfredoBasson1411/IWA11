document.addEventListener('DOMContentLoaded', function () {
    // Function to update order status based on data attributes
    function updateOrderStatus(dlElement) {
        // Retrieve data attributes
        const biscuits = dlElement.dataset.biscuits;
        const donuts = dlElement.dataset.donuts;
        const pancakes = dlElement.dataset.pancakes;
        const delivered = dlElement.dataset.delivered === 'true';

        // Find elements to update
        const biscuitsElement = dlElement.querySelector('.biscuits .count');
        const donutsElement = dlElement.querySelector('.donuts .count');
        const pancakesElement = dlElement.querySelector('.pancakes .count');
        const statusElement = dlElement.querySelector('.status .count');

        // Update text content with data attributes if elements are found
        if (biscuitsElement) {
            biscuitsElement.textContent = biscuits;
        }
        if (donutsElement) {
            donutsElement.textContent = donuts;
        }
        if (pancakesElement) {
            pancakesElement.textContent = pancakes;
        }
        if (statusElement) {
            statusElement.textContent = delivered ? 'Delivered' : 'Pending';
        }
    }

    // Retrieve all dl elements representing orders
    const orderElements = document.querySelectorAll('dl');

    // Iterate over each order element and update its status
    orderElements.forEach(function(orderElement) {
        updateOrderStatus(orderElement);
    });
});
