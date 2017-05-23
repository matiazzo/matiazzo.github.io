<?php

/* partials/footer.html.twig */
class __TwigTemplate_208da0859ca7d0c048c54f75f1a564e8784994174da36b833aa3a7bcb43f3817 extends Twig_Template
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
        echo "<footer id=\"footer\">
    <p class=\"small\">";
        // line 2
        echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->translate("SITE.COPYRIGHT", twig_date_format_filter($this->env, "now", "Y"));
        echo "</p>
</footer>
";
    }

    public function getTemplateName()
    {
        return "partials/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<footer id=\"footer\">
    <p class=\"small\">{{ 'SITE.COPYRIGHT'|t(\"now\"|date('Y')) }}</p>
</footer>
", "partials/footer.html.twig", "/Users/andre.matiazzo/Desktop/mtzz/github/matiazzo.github.io/blog/user/themes/cacti/templates/partials/footer.html.twig");
    }
}
