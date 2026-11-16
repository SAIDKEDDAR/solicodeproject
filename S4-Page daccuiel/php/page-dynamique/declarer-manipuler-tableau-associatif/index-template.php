<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Blog</title>
</head>
<body>
    <h1>Liste des Articles</h1>

    <div class="grille-articles">
        <?php foreach ($articles as $article): ?>
            <div class="carte-article">
                
                <a href="article.php?id=<?= $article['id'] ?>" class="carte-image">
                    <img src="images/<?= htmlspecialchars($article['image']) ?>" alt="Illustration" width="150">
                </a>
                
                <span class="etiquette-categorie <?php if ($article['categorie_couleur'] == 'bleu'): ?>bleu<?php else: ?>rose<?php endif; ?>">
                    <?= htmlspecialchars($article['categorie_libelle']) ?>
                </span>
                
                <div class="carte-contenu">

                    <?php if ($article['id'] == 1): ?>
                        <small class="badge-special">⭐ À la une</small>
                    <?php endif; ?>

                    <h3><a href="article.php?id=<?= $article['id'] ?>"><?= htmlspecialchars($article['titre']) ?></a></h3>
                    
                    <p><?= htmlspecialchars(mb_substr($article['contenu'], 0, 100)) ?>...</p>
                
                    <div class="carte-meta">
                        <span><?= date('d M Y', strtotime($article['date_creation'])) ?></span> | 
                        <span>5 min</span>
                    </div>
                </div>

            </div>
        <?php endforeach; ?>
    </div>

    <section class="filtre-categories">
    <h2>Explorer par thème</h2>
    <div class="liste-filtres">
        <a href="index.php" class="pilule-filtre actif">Tous les articles</a>
        <?php foreach ($categories as $cat): ?>
            <a href="categorie.php?id=<?= $cat['id'] ?>" class="pilule-filtre">
                <?= htmlspecialchars($cat['libelle']) ?>
            </a>
            <?php endforeach; ?>
    </div>
</section>

</body>
</html>