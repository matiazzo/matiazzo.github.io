<?php

/* partials/post-item.html.twig */
class __TwigTemplate_8de08c0e94c7b677607a0575e6e821daab905665950370ead79cc2d1bd8c90f8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<li>
    <a href='";
        // line 2
        echo $this->getAttribute((isset($context["post"]) ? $context["post"] : null), "url", array());
        echo "'><aside class=\"dates\">";
        echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translateArray("MONTHS_OF_THE_YEAR", (twig_date_format_filter($this->env, $this->getAttribute((isset($context["post"]) ? $context["post"] : null), "date", array()), "n") - 1));
        echo " ";
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["post"]) ? $context["post"] : null), "date", array()), "d");
        echo "</aside></a>
    <a href='";
        // line 3
        echo $this->getAttribute((isset($context["post"]) ? $context["post"] : null), "url", array());
        echo "'>";
        echo $this->getAttribute((isset($context["post"]) ? $context["post"] : null), "title", array());
        echo " <h2>";
        echo $this->getAttribute($this->getAttribute((isset($context["post"]) ? $context["post"] : null), "header", array()), "headline", array());
        echo "</h2></a>
</li>
";
    }

    public function getTemplateName()
    {
        return "partials/post-item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 3,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<li>
    <a href='{{ post.url }}'><aside class=\"dates\">{{ 'MONTHS_OF_THE_YEAR'|ta(post.date|date('n') - 1) }} {{ post.date|date('d') }}</aside></a>
    <a href='{{ post.url }}'>{{ post.title }} <h2>{{ post.header.headline }}</h2></a>
</li>
", "partials/post-item.html.twig", "/Users/andre.matiazzo/Desktop/mtzz/github/matiazzo.github.io/blog/user/themes/cacti/templates/partials/post-item.html.twig");
    }
}
