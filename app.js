// Essential ingredients (middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Recipe book setup (view engine configuration)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Welcome to my kitchen! (main route)
app.get('/', (req, res) => {
    res.render('index', {
        title: "Alexandria's Recipe Collection",
        message: "Welcome to my virtual kitchen!"
    });
});

// Oops! Recipe not found (404 handler)
app.use((req, res, next) => {
    res.status(404).render('error', {
        message: "Sorry! We couldn't find the recipe you're looking for.",
        error: { status: 404 }
    });
});

// Kitchen mishap handler (error handler)
app.use((err, req, res, next) => {
    res.status(err.status || 500).render('error', {
        message: err.message || "Oops! We had a little kitchen mishap.",
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// Opening the kitchen (start server)
app.listen(PORT, () => {
    console.log(`🧁 Kitchen is open! Server is running on port ${PORT}`);
});

module.exports = app;