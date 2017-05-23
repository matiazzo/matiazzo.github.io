<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/andre.matiazzo/Desktop/mtzz/github/matiazzo.github.io/blog/user/config/site.yaml',
    'modified' => 1491866135,
    'data' => [
        'title' => 'blog',
        'author' => [
            'name' => 'André Matiazzo',
            'email' => 'matiazzoandre@gmail.com'
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag'
        ],
        'metadata' => [
            'description' => 'Grav is an easy to use, yet powerful, open source flat-file CMS'
        ],
        'summary' => [
            'enabled' => true,
            'format' => 'short',
            'size' => 300,
            'delimiter' => '==='
        ],
        'blog' => [
            'route' => '/blog'
        ]
    ]
];
