<?php

namespace App\Controller;

use App\Repository\RestaurantsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RestaurantsController extends AbstractController
{
    private $entityManager;
    private $restaurantsRepository;

    public function __construct(EntityManagerInterface $entityManager, RestaurantsRepository $restaurantsRepository)
    {
        $this->entityManager = $entityManager;
        $this->restaurantsRepository = $restaurantsRepository;
    }

    /**
     * @Route("/", name="restaurants")
     */
    public function index(): Response
    {
        return $this->render('restaurants/index.html.twig', [
            'controller_name' => 'RestaurantsController',
        ]);
    }

    /**
     * @Route("/api/restaurants", name="list_restaurants")
     */
    public function getRestaurants()
    {
        $restaurants = $this->restaurantsRepository->findAll();
        $arrayRestaurants = [];
        foreach($restaurants as $restaurant){
            $arrayRestaurants[] = $restaurant->toArray(); 
        }
        return $this->json($arrayRestaurants);
    }
}
